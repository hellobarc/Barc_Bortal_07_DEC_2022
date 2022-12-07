<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuizAnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('quiz_answers')->insert([
            [
                'quiz_id'=>1,
                'answer_text'=>'True',
                'is_correct'=>'yes'
            ],
            [
                'quiz_id'=>1,
                'answer_text'=>'False',
                'is_correct'=>'no'
            ],
            [
                'quiz_id'=>2,
                'answer_text'=>'Chose one of the first',
                'is_correct'=>'yes'
            ],
            [
                'quiz_id'=>2,
                'answer_text'=>'Chose 2nd option',
                'is_correct'=>'no'
            ],
            [
                'quiz_id'=>2,
                'answer_text'=>'Chose 3nd option',
                'is_correct'=>'no'
            ],
            [
                'quiz_id'=>3,
                'answer_text'=>'False',
                'is_correct'=>'yes'
            ],
            [
                'quiz_id'=>3,
                'answer_text'=>'True',
                'is_correct'=>'no'
            ]
        ]);
    }
}
