<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WritingFeedback extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','writing_question_id','task_serial','feedback_text','ta_1','ta_2','ta_3','cc_1','cc_2','cc_3','lr_1','lr_2','lr_3','gra_1','gra_2','gra_3','total_score'];
}

