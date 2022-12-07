<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserProfile;
use File;

class UserProfileControllers extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $form_data = $request->input();

        $user_id            =  $form_data['user_id'];
        $phone              =  $form_data['phone'];
        // $avatar             =  $form_data['avatar'];

        if ($form_data['avatar']) {
            $file = $form_data['avatar'];
            $fileFullName = time() . '.' . $file->getClientOriginalExtension();
            $file->public_path('user_photo/' .$fileFullName);
            $avater->avater = $fileFullName;
            // $avater->save();

        }

        $address            =  $form_data['address'];
        $batch              =  $form_data['batch'];
        $fathers_name       =  $form_data['fathers_name'];
        $mohters_name       =  $form_data['mohters_name'];
        $education          =  $form_data['education'];
        $occupation         =  $form_data['occupation'];

    //    $at = new Attendance();
    //    dd($at);
        $auth_user_id = auth()->user()->id;
        $check_user_profile  = UserProfile::where('user_id',$auth_user_id)->count();

        $message = "You are not same person";

         if($check_user_profile){
             return response()->json(["status"=>"duplicate","message"=>$message]);
         }else{
            UserProfile::create([
                'user_id'=> $user_id,
                'phone'=> $phone,
                'avatar'=> $avatar,
                'address'=> $address,
                'batch'=> $batch,
                'fathers_name'=> $fathers_name,
                'mohters_name'=> $mohters_name,
                'education'=> $education,
                'occupation'=> $occupation,
                'purpose'=>'user profile'
            ]);
            $message = "Profile has been created successfully";
            return response()->json(["status"=>"success","message"=>$message],201);
         }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user_profile_show = UserProfile::find($id);
        return response()->json($user_profile_show,202,['Content-Type' => 'application/json','Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user_profile_update = UserProfile::find($id);

        // // $auth_user_id = auth()->user()->id;
        // $check_user_profile  = UserProfile::where('user_id',$user_profile_update)->count();

        $form_data = $request->input();

        $user_profile_update->phone              =  $form_data['phone'];
        // $user_profile_update->avatar             =  $form_data['avatar'];
        if ($form_data['avatar']) {
            if (File::exists('public/user_photo/'.$user_profile_update->avater)) {
                File::delete('public/user_photo/'.$user_profile_update->avater);
            }
            $file = $form_data['avatar'];
            $fileFullName = time() . '.' . $file->getClientOriginalExtension();
            $file->public_path('user_photo/' .$fileFullName);
            $user_profile_update->avater = $fileFullName;
        }

        $user_profile_update->address            =  $form_data['address'];
        $user_profile_update->batch              =  $form_data['batch'];
        $user_profile_update->fathers_name       =  $form_data['fathers_name'];
        $user_profile_update->mohters_name       =  $form_data['mohters_name'];
        $user_profile_update->education          =  $form_data['education'];
        $user_profile_update->occupation         =  $form_data['occupation'];

        $user_profile_update->save();

        $message = "Profile has been updated successfully";
        return response()->json(["status"=>"success","message"=>$message],201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user_profile_delete = UserProfile::find($id);
        if(!is_null($user_profile_delete))
    	{
    		//Delete user profile image
    		if (File::exists('public/user_photo/'.$user_profile_delete->avatar)) {
   			File::delete('public/user_photo/'.$user_profile_delete->avatar);
   			}
    		$user_profile_delete->delete();

            $message = "Profile has been deleted successfully";
            return response()->json(["status"=>"success","message"=>$message],201);
    	}
    }
}
