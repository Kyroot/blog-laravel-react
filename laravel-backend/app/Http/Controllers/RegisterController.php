<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

// class RegisterController extends Controller
// {

//     public function index()
//     {

//         return ["test"];
//     }

//     public function store(Request $request)
//     {
//         // return response()->json(['session_token' => $request->session()->token(), 'token'=> request()->input('_token')]);

//         $attributes = request()->validate([
//             'username' => 'required|max:255|min:3|unique:users,username',
//             'name' => 'required|max:255|min:5',
//             'email' => 'required|email|max:255|unique:users,email',
//             'password' => 'required|min:7'
//         ]);

//         $attributes['password'] = bcrypt($attributes['password']);

//         $user = User::create($attributes);

//         auth()->login($user);
//         // session()->flash('success', 'Your account has been created.');
//         $accessToken = $user->createToken('authToken')->plainTextToken;
//         $minutes = 120;
//         $path = '/';
//         $secure = true;
//         $httpOnly = true;

//         return response()->json(['isLoggedIn' => 'true'], 200) ->withCookie(cookie('access_token', $accessToken, $minutes, $path, null, $secure, $httpOnly, false, 'None'));
//     }
// }
