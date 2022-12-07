<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notification;

class NotificationController extends Controller
{

    public function notification(Request $request){
        $notification = Notification::get();
        return response()->json(['notification'=>$notification ],202,['Content-Type' => 'application/json', 'Charset'=>'utf-8'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

}
