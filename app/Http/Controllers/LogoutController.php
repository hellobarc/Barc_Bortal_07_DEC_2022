<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class LogoutController extends Controller
{

    public function logout(Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response(["logout"=>true], 201);
    }
}
