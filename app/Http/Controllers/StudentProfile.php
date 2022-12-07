<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserProfile;
use File;

class StudentProfile extends Controller
{


    public function get_student_profile(){
        $user_id = auth()->user()->id;
        $user_data = User::find($user_id);
        $profile_data = UserProfile::where('user_id',$user_id)->get();

        return response()->json(["status"=>"success","user_data"=>$user_data,"profile_data"=>$profile_data],201);
    }


    // Set Student Profile //
    public function set_student_profile(Request $request){

        $form_data = $request->input();
        $name =  $form_data['user_data']['name'];
        $email =  $form_data['user_data']['email'];
        $phone =  $form_data['profile_data']['phone'];
        $mothers_name =  $form_data['profile_data']['mothers_name'];
        $fathers_name =  $form_data['profile_data']['fathers_name'];
        $house =  $form_data['profile_data']['house'];
        $road =  $form_data['profile_data']['road'];
        $subcity =  $form_data['profile_data']['subcity'];
        $city =  $form_data['profile_data']['city'];

        $user_id = auth()->user()->id;


       $Profile_update =  UserProfile::updateOrCreate(
            ['user_id'=>$user_id],
            [
                'phone'=>$phone,
                'mothers_name'=>$mothers_name,
                'fathers_name'=>$fathers_name,
                'house'=>$house,
                'road'=>$road,
                'subcity'=>$subcity,
                'city'=>$city
            ]
        );

        //dd( $Profile_update );



    /*     if ($form_data['avatar']) {
            if (File::exists('public/user_photo/'.$user_profile_update->avater)) {
                File::delete('public/user_photo/'.$user_profile_update->avater);
            }
            $file = $form_data['avatar'];
            $fileFullName = time() . '.' . $file->getClientOriginalExtension();
            $file->public_path('user_photo/' .$fileFullName);
            $user_profile_update->avater = $fileFullName;
        }
 */

/*  $user_profile_update = UserProfile::where('user_id',$user_id)->get();
     $user_profile_update->phone            =  $phone;
        $user_profile_update->mothers_name     =  $mothers_name;
        $user_profile_update->fathers_name     =  $fathers_name;
        $user_profile_update->house            =  $house;
        $user_profile_update->road             =  $road;
        $user_profile_update->subcity          =  $subcity;
        $user_profile_update->city             =  $city;
        $user_profile_update->save(); */

        $user_data = User::find($user_id);

        $user_data->name = $name;
        $user_data->email = $email;

        $user_data->save();

        $message = "Profile has been updated successfully";
        return response()->json(["status"=>"success","message"=>$message],201);
    }
}
