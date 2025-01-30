<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth; // Import the JWTAuth facade

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();

        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        // Generate a JWT token for the user
        $token = JWTAuth::fromUser($user);

        return response([
            'user' => $user,
            'token' => $token,
        ], 201); // 201 status code for resource creation
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        // Attempt to authenticate the user and generate a JWT token
        if (!$token = JWTAuth::attempt($credentials)) {
            return response([
                'message' => 'The email and password provided are incorrect',
            ], 422); // Unauthorized
        }

        /** @var User $user */
        $user = Auth::user();

        return response([
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function logout(Request $request)
    {
        // Invalidate the JWT token
        JWTAuth::invalidate(JWTAuth::getToken());

        return response([
            'message' => 'Logged out successfully',
        ]);
    }
}