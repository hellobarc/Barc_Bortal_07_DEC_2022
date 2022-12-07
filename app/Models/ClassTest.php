<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassTest extends Model
{
    use HasFactory;
    protected $fillable = ['test_name','test_date','module_id','batch_id','unit_id','type'];


    public function batch(){
        return $this->belongsTo(StudentBatch::class,'batch_id');
    }

    public function module(){
        return $this->hasOne(CourseModule::class,'id','module_id');
    }

    public function studentmarks(){
        return $this->hasMany(ClasstestMarks::class,'class_test_id','id');
    }

}

