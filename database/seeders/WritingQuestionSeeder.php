<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class WritingQuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('writing_questions')->insert([
            [
                'title'=>'Academic writing task -1',
                'description'=>'<p>The cart below shows the number of trips made by children in one country in 1990 to travel to aand from school using different modes of transport.</p>
                <p>Summarise the information by selecting and reporting the main features, and make a comparisons where relavant.</p>',
                'task_serial'=>'1',
                'course_list_id'=>'1',
                'course_unit_id'=>'1',
                'study_minutes'=>10,
                'image'=>'task_1_example.png'
            ],
            [
                'title'=>'Academic writing task -2',
                'description'=>'<p>The cart below shows the number of trips made by children in one country in 1990 to travel to aand from school using different modes of transport.</p>
                <p>Summarise the information by selecting and reporting the main features, and make a comparisons where relavant.</p>',
                'task_serial'=>'2',
                'course_list_id'=>'1',
                'course_unit_id'=>'1',
                'study_minutes'=>10,
                'image'=>'task_1_example.png'
            ]
        ]);
    }
}

