<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizAnswer extends Model
{
    use HasFactory;
    protected $fillable = ['quiz_id','answer_text','is_correct'];

    public function quiz(){
        return $this->belongsTo(Quiz::class,'quiz_id');
    }

}
