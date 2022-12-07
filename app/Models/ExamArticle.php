<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamArticle extends Model
{
    use HasFactory;
    protected $fillable = ['excersize_id','title','image','content'];
}

