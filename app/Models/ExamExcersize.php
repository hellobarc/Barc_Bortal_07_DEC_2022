<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamExcersize extends Model
{
    use HasFactory;
    protected $fillable = ['exam_id','excersize_name','excersize_module'.'time_limit'];


    public function exam(){
        return $this->belongsTo(Exam::class,'exam_id');
    }
}

