<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AudioTrackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('listening_tracks')->insert([
            'lesson_id' => 2,
            'title' => 'IELTS practice Listening test - part 1',
            'description' => '<p>This is the first part of your Listening test. Listen to the audio and answer questions  </p>

            <p> Listen to the instructions for each part of this section carefully. Answer all the questions. You can download the questions for the entire Listening practice test from the Listening practice test 1 page. The questions for part 1 are also shown on this page.
            </p>
            <p>
            While you are listening, write your answers on the question paper. Use a pencil.
            </p>
            <p>
            When you have completed all four parts of the Listening test you will have ten minutes to copy your answers on to a separate answer sheet</p>',
            'image' => '',
            'file_name' => 'listenin_track-1.mp4',
            'file_path' => 'audio_track/listenin_track-1.mp4',
            'file_extension' => 'mp4',
            'purpose' => 'Listening',
        ]);
    }
}
