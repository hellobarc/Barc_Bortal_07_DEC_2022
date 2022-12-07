<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('course_levels')->insert([
            [
                'level_name'=>'Foundation',
                'grade'=>'A1',
                
            ],
            [
                'level_name'=>'Pre-IELTS',
                'grade'=>'A2',
                
            ],
            [
                'level_name'=>'IELTS Preparation',
                'grade'=>'B1',
                
            ],
            [
                'level_name'=>'IELTS ADVANCE',
                'grade'=>'B2',
                
            ]
        ]);
    }
}
