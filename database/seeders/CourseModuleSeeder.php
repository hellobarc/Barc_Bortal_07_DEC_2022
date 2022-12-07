<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;



class CourseModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('course_modules')->insert([
            [
                'course_list_id'=>1,
                'parent_id'=>0,
                'module_name'=>'Reading',
                'module_description'=>'Reading Practise'
            ],
            [
                'course_list_id'=>1,
                'parent_id'=>0,
                'module_name'=>'Listening',
                'module_description'=>'Listening Practise'
            ],
            [
                'course_list_id'=>1,
                'parent_id'=>0,
                'module_name'=>'Writing',
                'module_description'=>'Writing Practise'
            ]
            ,
            [
                'course_list_id'=>1,
                'parent_id'=>0,
                'module_name'=>'Speaking',
                'module_description'=>'Speaking Practise'
            ]
            ,
            [
                'course_list_id'=>1,
                'parent_id'=>3,
                'module_name'=>'Grammar',
                'module_description'=>'Grammar Practise'
            ],
            [
                'course_list_id'=>1,
                'parent_id'=>3,
                'module_name'=>'Vocabulary',
                'module_description'=>'Vocabulary Practise'
            ]
        ]);
    }
}



