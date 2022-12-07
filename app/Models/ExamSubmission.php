<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamSubmission extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','exam_id','excersize_id','question_id','question_type','question_ans_id','answer_text','status','marks_obtained'];
}

