<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RgisterRequest;
use Error;

class LoginController extends Controller
{
      public function authenticate(Request $request)
    {
        try {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('/');
        }
        throw new Error();
        } catch (\Throwable $th) {
            //throw $th;
            return back()->withErrors([
            'username' => 'Username Atau Password Yang Anda Masukan Salah',
        ])->onlyInput('email');
        }

    }

    public function logout(Request $request)
{
    Auth::logout();

    $request->session()->invalidate();

    $request->session()->regenerateToken();

    return redirect('/');
}

public function register(RgisterRequest $request)
{
    $request['role_id'] = 3;
    User::create($request->all());
    return redirect('/login')->with('success', "Berhasil Membuat Akun");
}
}
