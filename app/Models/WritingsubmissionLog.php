<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WritingsubmissionLog extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','writing_question_id','start_time','stop_time'];
}

