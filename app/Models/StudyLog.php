<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudyLog extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','lesson_id','entry_time','completion_time','lesson_type'];
}
