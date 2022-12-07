<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;



class UserProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_profiles')->insert([
            [
                'user_id' => 1,
                'user_type' => 'student',
                'phone' => '01837664478',
                'avatar' => 'student_avatar.png', // parent 6 // student 5 //  insturctor 4 // Content developer 3 // Moderator 2 // Super admin 1
                'batch' => 0,
                'fathers_name' => 'Mr. Dad',
                'mothers_name' => 'Mrr. Mom',
                'education' => 'H.S.C',
                'occupation' => 'Student'
            ],
            [
                'user_id' => 2,
                'user_type' => 'content',
                'phone' => '01712',
                'avatar' => 'avatar.png', // parent 6 // student 5 //  insturctor 4 // Content developer 3 // Moderator 2 // Super admin 1
                'batch' => 0,
                'fathers_name' => 'Mr. Dad',
                'mothers_name' => 'Mrr. Mom',
                'education' => 'PHD',
                'occupation' => 'Teacher'
            ],
            [
                'user_id' => 3,
                'user_type' => 'moderator',
                'phone' => '01712',
                'avatar' => 'avatar.png', // parent 6 // student 5 //  insturctor 4 // Content developer 3 // Moderator 2 // Super admin
                'batch' => 0,
                'fathers_name' => 'Mr. Dad',
                'mothers_name' => 'Mrr. Mom',
                'education' => 'PHD',
                'occupation' => 'Administrator'
            ],

        ]);
    }
}


