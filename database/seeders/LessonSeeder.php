<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('lessons')->insert([
            [
                'course_list_id'=>1,
                'unit_id'=>1,
                'course_module_id'=>1,
                'title'=>'A2 Reading Lesson -1 on Hobby',
                'description'=>'Its a reading Lesson for IELTS',
                'prerequisite'=>'Basic English Jante hobe',
                'template'=>'reading_with_quiz',
                'is_extra'=>'yes',
                'study_hour'=>0,
                'study_minutes'=>20,
                'extrea_id'=>null,
            ],
            [
                'course_list_id'=>1,
                'unit_id'=>1,
                'course_module_id'=>2,
                'title'=>'A2 Listening Unit-1 and Part-1',
                'description'=>'Its a Listening Lesson for IELTS',
                'prerequisite'=>'Basic English Jante hobe',
                'template'=>'listening_with_quiz',
                'is_extra'=>'no',
                'study_hour'=>0,
                'study_minutes'=>30,
                'extrea_id'=>null,
            ]
        ]);
    }
}

