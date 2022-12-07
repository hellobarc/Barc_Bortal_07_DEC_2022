<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListeningTrack extends Model
{
    use HasFactory;
    protected $fillable = ['lesson_id','title','description','image','file_name','file_path','file_extension','purpose'];

    public function lesson(){
        return $this->belongsTo(Lesson::class,'lesson_id');
    }

}


