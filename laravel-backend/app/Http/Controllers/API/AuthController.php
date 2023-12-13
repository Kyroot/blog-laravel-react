<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request)
    {
            $request->validate([
                'username' => 'required|string',
                'password' => 'required|string',
            ]);

            $credentials = $request->only('username', 'password');
            $user = User::where('username', $credentials['username'])->first();

            $token = Auth::attempt($credentials);

            if (!$token) {
                return response()->json([
                    'message' => 'Incorrect credentials',
                ], 401);
            }

            $username = $request->input('username');

            $role = ($username === 'daniel') ? 'admin' : 'user';

            $user = Auth::user();
            return response()->json([
                'user' => [
                    'username'=>$user,
                    'role' => $role],
                'authorization' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);
    }

    public function register(Request $request)
    {
        try {
            $attributes = $request->validate([
                'username' => 'required|max:255|min:3|unique:users,username',
                'name' => 'required|max:255|min:5',
                'email' => 'required|email|max:255|unique:users,email',
                'password' => 'required|min:7'
            ]);

            $user = User::create($attributes);

            return response()->json([
                'message' => 'User created successfully',
                'user' => $user
            ]);
        } catch (ValidationException $e) {
            $error_message = $e->validator->errors()->first();

            return response()->json(['message' => $error_message], 400);
        }
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh(Request $request)
    {
        // $username = $request->input('username');
        $username = Auth::user();
        $role = ($username->username === 'daniel') ? 'admin' : 'user';

        return response()->json([
            'user' => Auth::user(),
            'role' => $role,
            'authorization' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
                'extra'=>'new_Token'
            ]
            ]);
    }
}
