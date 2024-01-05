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
        Schema::create('jadwal_films', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('films_id');
            $table->unsignedBigInteger('jams_id');
            $table->unsignedBigInteger('ruangs_id');
            $table->date('tanggal_tayang');
            $table->timestamps();

            $table->foreign('films_id')->on('films')->references('id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreign('ruangs_id')->on('ruangs')->references('id')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jadwal_films');
    }
};
