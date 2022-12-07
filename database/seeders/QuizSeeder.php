<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('quizzes')->insert([
            [
                'lesson_id'=>1,
                'question'=>'People hike through trail as part of military training.',
                'instruction'=>'<strong>TRUE</strong> if the statement agree with the information<br/>
                <strong> FALSE</strong>  if the statement disagree with the information',
                'quiz_type'=>'ture_false',
                'marks'=>5,
                'time_limit'=>0
            ],
            [
                'lesson_id'=>1,
                'question'=>'Hiking is basically a walking exercise.',
                'instruction'=>'<strong>Select the Best Answer<br/>',
                'quiz_type'=>'multiple_choise',
                'marks'=>5,
                'time_limit'=>0
            ],
            [
                'lesson_id'=>1,
                'question'=>'Your brain test',
                'instruction'=>'Please fill the blank correctly',
                'quiz_type'=>'input_text',
                'marks'=>5,
                'time_limit'=>0
            ]
        ]);
    }
}

