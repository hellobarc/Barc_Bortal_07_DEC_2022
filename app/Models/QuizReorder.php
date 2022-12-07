<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizReorder extends Model
{
    use HasFactory;
    protected $fillable = ['quiz_id','content_text','sort_order'];
}

