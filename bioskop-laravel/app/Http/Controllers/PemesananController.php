<?php

namespace App\Http\Controllers;

use App\Models\JadwalFilm;
use App\Models\PemesananTiket;
use Illuminate\Http\Request;

class PemesananController extends Controller
{
    public function checkout(Request $request){
        $jadwal = JadwalFilm::find($request->id);

        return view('main.checkout',[
            'jadwal' => $jadwal,
            'nomor_kursi' => $request->nomor_kursi,
        ]);
    }

  public function store(Request $request){
    foreach ($request->nomor_kursi as $nomor) {
        PemesananTiket::create([
                'nomor_tiket' => rand(),
                'nomor_kursi' => $nomor,
                'user_id' => auth()->user()->id,
                'jadwalFilm_id' => $request->jadwalFilm_id
        ]);
    }
    return redirect('/tiket')->with('success', "Berhasil Memesan Tiket");
}

public function tiket(){
    $tiket = auth()->user()->load(['pemesanan_tiket.jadwalFilms.films', 'pemesanan_tiket.jadwalFilms.ruangs']);
    return view('main.tiket',[
            'tiket' => $tiket
        ]);
}
}
