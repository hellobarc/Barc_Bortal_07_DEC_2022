<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CourseUnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('course_units')->insert([
            [
                'unit_name'=>'Unit-1',
                'unit_serial'=>1,
                'unit_detail'=>'Introductory'
            ],
            [
                'unit_name'=>'Unit-2',
                'unit_serial'=>2,
                'unit_detail'=>'Basic'
            ],
            [
                'unit_name'=>'Unit-3',
                'unit_serial'=>3,
                'unit_detail'=>'Grammar'
            ]
            ,
            [
                'unit_name'=>'Unit-4',
                'unit_serial'=>4,
                'unit_detail'=>'Vocabulary'
            ],
            [
                'unit_name'=>'Unit-5',
                'unit_serial'=>5,
                'unit_detail'=>'Grammer in deep'
            ],
            [
                'unit_name'=>'Unit-6',
                'unit_serial'=>6,
                'unit_detail'=>'Basic of IELTS'
            ],
            [
                'unit_name'=>'Unit-7',
                'unit_serial'=>7,
                'unit_detail'=>'IELTS Pre Course'
            ],
            [
                'unit_name'=>'Unit-8',
                'unit_serial'=>8,
                'unit_detail'=>'Course Ending'
            ]
        ]);
    }

}



