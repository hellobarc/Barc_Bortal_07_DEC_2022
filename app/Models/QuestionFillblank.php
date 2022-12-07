<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionFillblank extends Model
{
    use HasFactory;
    protected $fillable = ['question_id','text','is_blank','blank_answer','serial','is_newline'];
}

