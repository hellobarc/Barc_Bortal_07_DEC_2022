<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizRadio extends Model
{
    use HasFactory;
    protected $fillable = ['quiz_id','option_text','is_correct'];
}
