<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pemesanan_tikets', function (Blueprint $table) {
            $table->bigInteger('nomor_tiket');
            $table->unsignedBigInteger('jadwalFilm_id');
            $table->string('nomor_kursi');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();
            $table->foreign('jadwalFilm_id')->on('jadwal_films')->references('id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreign('user_id')->on('users')->references('id')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pemesanan_tikets');
    }
};
