<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('articles')->insert([
            'lesson_id' => 1,
            'title' => 'Hiking vs. Backpacking',
            'image' => '0',
            'content' => 'Hiking is essentially the act of walking in the nature through a trail or an unknown path. Hiking just
            requires you to walk at an average speed just to reduce weight, get some fresh air, as well as
            experience being alone in a place away from the hustle bustle of daily life. People hike by the
            countryside, along the woods for exercise, pleasure or military training. It’s a leisurely outdoor
            activity that involves walking in natural surroundings, often in mountains, woodlands or any other
            place of natural beauty.',
            'purpose' => 'IELTS Reading',
        ]);
    }
}


