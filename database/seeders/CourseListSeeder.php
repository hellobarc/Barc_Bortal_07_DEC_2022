<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('course_lists')->insert([
            [
                'course_categories_id'=>1,
                'course_name'=>'A2',
                'course_title'=>'A2 Foundation',
                'short_description'=>'A2 is a Foundation Course',
                'thumbnail'=>'a2.jpg',
                'overview'=>'A2 is a Foundation Course',
                'curriculum'=>'A2 is a Foundation Course',
                'who_should'=>'IELTS student'
            ],
            [
                'course_categories_id'=>1,
                'course_name'=>'B1',
                'course_title'=>'B1 Pre IELTS',
                'short_description'=>'A2 is a Foundation Course',
                'thumbnail'=>'b1.jpg',
                'overview'=>'A2 is a Foundation Course',
                'curriculum'=>'A2 is a Foundation Course',
                'who_should'=>'IELTS student'
            ],
            [
                'course_categories_id'=>1,
                'course_name'=>'B2',
                'course_title'=>'B2 IETLS',
                'thumbnail'=>'b2.jpg',
                'short_description'=>'A2 is a Foundation Course',
                'overview'=>'A2 is a Foundation Course',
                'curriculum'=>'A2 is a Foundation Course',
                'who_should'=>'IELTS student'
            ]
            ,
            [
                'course_categories_id'=>1,
                'course_name'=>'C1',
                'course_title'=>'C1 Advance IETLS',
                'short_description'=>'A2 is a Foundation Course',
                'thumbnail'=>'c1.jpg',
                'overview'=>'A2 is a Foundation Course',
                'curriculum'=>'A2 is a Foundation Course',
                'who_should'=>'IELTS student'
            ]
        ]);
    }
}
