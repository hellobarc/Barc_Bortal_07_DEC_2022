<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WritingSubmission extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','writing_question_id','task_text','time_used','feedback','marks','status'];
}


