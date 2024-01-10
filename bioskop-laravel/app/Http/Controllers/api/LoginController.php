<?php

namespace App\Http\Controllers\api;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;

use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(Request $request){
      $request->validate([
        'username' => 'required',
        'password' => 'required',
    ]);

    $user = User::where('username', $request->username)->first();

    if (! $user || ! Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    // return $user->createToken('token')->plainTextToken;
    return response()->json([
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user,
    ]);
    }

    public function logout(Request $request)
    {
        $request = $request->user()->tokens()->delete();
            return response()->json(['message' => $request]);

    }

    public function register(Request $request)
    {
        try {
 $validate = $request->validate([
                'username'=> 'required',
                'name' => 'required',
                'email' => 'required',
                'password' => 'required',
                'role_id' => 'required'
        ]);

        $user = User::create($validate);
        return response()->json([
                'status' => 200,
                'data' => $user,
                'message' => "berhasil menambahkan data"
        ]);
        } catch (\Throwable $th) {
            //throw $th;
           return response()->json([
                'status' => 500,
                'message' => $th
        ]);
        }




    }
}
