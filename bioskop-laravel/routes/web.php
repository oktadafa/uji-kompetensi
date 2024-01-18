<?php

use App\Http\Controllers\FilmController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PemesananController;
use App\Models\PemesananTiket;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [FilmController::class,'index']);
Route::get('/film/{id}', [FilmController::class, 'show']);

Route::get('/login', function() {
    return view('login');
})->name('login')->middleware('guest');

Route::get('/register', function(){
    return view('register');
})->middleware('guest');

Route::post('/login', [LoginController::class, 'authenticate']);
Route::post('/register', [LoginController::class, 'register']);

Route::middleware('auth')->group(function () {
    Route::get("/teater/{id}", [FilmController::class, 'teater']);
    Route::get("/checkout", [PemesananController::class, 'checkout']);
    Route::post('/logout', [LoginController::class,'logout']);
    Route::post('/checkout',[PemesananController::class, 'store']);
    Route::get('/tiket', [PemesananController::class, 'tiket']);
    Route::get('/cetaktiket/', [PemesananController::class, 'cetak_tiket']);
});

