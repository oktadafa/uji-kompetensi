<?php

namespace App\Http\Controllers;

use App\Models\Film;
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
        $id->tanggal_rilis = date('d/m/Y', strtotime($id->tanggal_rilis));
        $id->durasi = "$jam Jam $menit Menit";
        return view('main.show', [
                'film' => $id
        ]);
    }

    public function teater(){
        $jumlah_kursi = 40;
        $row = 10;
        return view('main.teater',[
            'id_kursi' => str_split('ABCDEFGHIJKLMNOPQRSTU'),
            'jumlah_kursi' => $jumlah_kursi,
            'kursi_perbaris' => $row
        ]);
    }
}
