<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'role_id', // parent 6 // student 5 //  insturctor 4 // COntent developer 3 // Moderator 2 // Super admin 1 // Advisers 7
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function userprofile(){
        return $this->hasOne(UserProfile::class,'user_id');
    }


    public function batch(){
        return $this->belongsToThrough(StudentBatch::class,UserProfile::class,'batch','user_id','id','id');  // Student batch er data lagbe UserProfile er mdaddome // UserProfile er batch er sathe StudetnBatch er id -> UserProfile er user_id er sathe User table er id
    }



}
