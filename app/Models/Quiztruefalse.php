<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiztruefalse extends Model
{
    use HasFactory;
    protected $fillable = ['quiz_id','correct_ans'];
}