<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizFillblank extends Model
{
    use HasFactory;
    protected $fillable = ['quiz_id','text','is_blank','blank_answer','serial','is_newline'];
}

