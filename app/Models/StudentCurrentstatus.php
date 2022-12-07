<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentCurrentstatus extends Model
{
    use HasFactory;
    protected $fillable = ['student_id','current_course','current_unit','parent_id'];
}

