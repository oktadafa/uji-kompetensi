<?php

namespace App\Http\Controllers;

use App\Models\Film;
use App\Models\JadwalFilm;
use Carbon\Carbon;
use Illuminate\Http\Request;


class FilmController extends Controller
{
    //
    public function index()
    {
        $films = Film::all();
        return view('main.index',[
            'films' => $films
        ]);
    }

    public function show(Film $id)
    {
        $waktu = explode(':', $id->durasi);
        $jam = intval($waktu[0]);
        $menit = intval($waktu[1]);

        $id->jadwal_films->tanggal_tayang =
        $id->durasi = "$jam Jam $menit Menit";
        return view('main.show', [
                'film' => $id
        ]);
    }

    public function teater(JadwalFilm $id){
        $id = $id->load('ruangs');
        $jumlah_kursi = $id->ruangs->jumlah_kursi;
        return view('main.teater',[
            'id_kursi' => str_split('ABCDEFGHIJKLMNOPQRSTU'),
            'jumlah_kursi' => $jumlah_kursi,
            'id' => $id,
        ]);
    }
}
