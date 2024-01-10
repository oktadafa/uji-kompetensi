<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JadwalFilm extends Model
{
    use HasFactory;

    public function films(){
        return $this->belongsTo(Film::class);
    }

    public function ruangs(){
        return $this->belongsTo(Ruang::class);
    }

    public function pemesanan_tiket(){
        return $this->hasMany(PemesananTiket::class,'jadwalFilm_id');
    }
}
