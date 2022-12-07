<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionDropdown extends Model
{
    use HasFactory;
    protected $fillable = ['question_id','text','is_dropdown','correct_answer','serial','is_newline'];
}

