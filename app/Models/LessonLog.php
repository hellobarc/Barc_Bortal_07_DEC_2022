<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LessonLog extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','lesson_id','status','quiz_id','quiz_submitted'];
}


