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
        $films = Film::with('jadwal_films')->orderBy('id', 'desc')->get();
        $data_film = [];
        $coming_soon = [];
        foreach ($films as $film) {
            # code...
        foreach ($film->jadwal_films as $jadwal) {
            if (strtotime($jadwal->tanggal_tayang) > time()) {
                if (!in_array($film, $coming_soon)) {
                    # code...
                    array_push($coming_soon,$film);
                }
            }
            if ( explode(" ",$jadwal->tanggal_tayang)[0] == date('Y-m-d')) {
                # code...
                if (!in_array($film, $data_film)) {
                    # code...
                    array_push($data_film,$film);
                }
            }
        }
        }
        return view('main.index',[
            'films_now' => $data_film,
            'films_coming_soon' => $coming_soon
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
            'id_kursi' => str_split('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
            'jumlah_kursi' => $jumlah_kursi,
            'id' => $id,
        ]);
    }
}
