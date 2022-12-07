<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentSupport extends Model
{
    use HasFactory;
    protected $fillable =  ['student_id','user_id','subject','message','type','status'];
}
