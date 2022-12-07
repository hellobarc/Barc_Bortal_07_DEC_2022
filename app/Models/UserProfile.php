<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    use HasFactory;
    protected $fillable =['user_id','user_type','phone','avatar','house','road','subcity','city','zip_code','batch','fathers_name','mothers_name','education','occupation','date_of_birth','admission_date','student_id','invoice_number'];

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function studentbatch(){
        return $this->hasOne(StudentBatch::class,'batch','id');
    }

}
