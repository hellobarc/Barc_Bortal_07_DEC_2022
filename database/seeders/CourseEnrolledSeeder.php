<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseEnrolledSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('course_enrolleds')->insert([
            'course_id' => 1,
            'user_id' => 1,
            'expired_date' => time()+100000,
            'status' => 'active'
        ]);
    }
}
