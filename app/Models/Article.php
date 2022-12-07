<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $fillable = ['lesson_id','title','image','content','purpose'];


    public function lesson(){
        return $this->belongsTo(Lesson::class,'lesson_id');
    }

}

