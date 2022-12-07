<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionReorder extends Model
{
    use HasFactory;
    protected $fillable = ['question_id','content_text','sort_order'];
}
