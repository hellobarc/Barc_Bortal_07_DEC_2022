<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    //
    public  function register(Request $request){


        if ($request->method()=="POST")
		{


       		$data = $request->input();

            $validatedData = $request->validate([
                'name' => 'required|max:55',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|confirmed',
                'password_confirmation' => 'required'
            ]);


            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => bcrypt($data['password'])
            ]);



            $token = $user->createToken('myapptoken')->plainTextToken;

            $response = [
                'user' => $user,
                'token' => $token,
                'status' =>'success'
            ];

            return response($response, 201);

        }else{
            return response(["test"=>"okay"], 201);
        }

    }


// Login //
    public function login(Request $request) {

        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);


        $user = User::where('email', $fields['email'])->first();

        if(!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Bad creds',
                'status' => 'Invalid'
            ], 201);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
            'isLogin' => true,
            'status' =>'success'
        ];

        return response($response, 201);
    }



 // Signup //
    public function signup(Request $request){
        $data = $request->input();

        $validatedData = $request->validate([
            'name' => 'required|max:55',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed',
            'password_confirmation' => 'required'
        ]);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
            'status' =>'success'
        ];

        return response($response, 201);


    }



    public function change_password(Request $request){
        $user_id = auth()->user()->id;
        $data = $request->input();
        $user = User::find( $user_id);
        $user->password =  bcrypt($data['password']);
        $user->save();
        return response(["messege"=>"Password updated successfully"], 201);
    }

    public function testpost(){
        return response(["test"=>"nothing"], 201);
    }


}
