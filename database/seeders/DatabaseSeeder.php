<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
            CourseListSeeder::class,
            CourseModuleSeeder::class,
            CourseUnitSeeder::class,
            LessonSeeder::class,
            ArticleSeeder::class,
            AudioTrackSeeder::class,
          //  QuizSeeder::class,
           // QuizAnswerSeeder::class,
            CourseEnrolledSeeder::class,
            WritingQuestionSeeder::class,
            CourseLevelSeeder::class,
            ImageGallerySeeder::class,
            UserProfileSeeder::class,
        ]);
    }
}
