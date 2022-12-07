<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('course_categories')->insert([
            [
                'name'=>'IELTS',
                'course_title'=>'IELTS Course',
                'course_description'=>'IELTS Course in Detail'
            ],
            [
                'name'=>'Foundation',
                'course_title'=>'English Foundation Course',
                'course_description'=>'English Foundation Course in Detail'
            ],
            [
                'name'=>'Business English',
                'course_title'=>'Business English Course',
                'course_description'=>'Business English Course in Detail'
            ]
        ]);
    }
}



