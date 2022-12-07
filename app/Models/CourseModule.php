<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseModule extends Model
{
    use HasFactory;
    protected $fillable = ['course_list_id','parent_id','module_name','module_description','image'];
}
