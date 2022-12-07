<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudentSupport;

class SupportController extends Controller
{
    //
    public function support_ticket(){
        $support_ticket = StudentSupport::get();
        return response()->json(["status"=>"success","support_ticket"=>$support_ticket],201);
    }
}
