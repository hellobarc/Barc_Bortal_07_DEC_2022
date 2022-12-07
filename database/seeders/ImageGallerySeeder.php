<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class ImageGallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('image_galleries')->insert([
            [
                'title'=>'Congratulation',
                'file_name'=>'congratulation_1.gif',
                'extension'=>'gif',
                'album_id'=>1
            ],
            [
                'title'=>'Congratulation',
                'file_name'=>'congratulation_2.gif',
                'extension'=>'gif',
                'album_id'=>1
            ],
            [
                'title'=>'Congratulation',
                'file_name'=>'congratulation_3.gif',
                'extension'=>'gif',
                'album_id'=>1
            ],
            [
                'title'=>'Congratulation',
                'file_name'=>'congratulation_4.gif',
                'extension'=>'gif',
                'album_id'=>1
            ],
            [
                'title'=>'Congratulation',
                'file_name'=>'congratulation_5.gif',
                'extension'=>'gif',
                'album_id'=>1
            ],

            [
                'title'=>'Congratulation',
                'file_name'=>'congratulation_6.gif',
                'extension'=>'gif',
                'album_id'=>1
            ],

            [
                'title'=>'Congratulation',
                'file_name'=>'congratulation_7.gif',
                'extension'=>'gif',
                'album_id'=>1
            ],

            [
                'title'=>'Congratulation',
                'file_name'=>'congratulation_8.gif',
                'extension'=>'gif',
                'album_id'=>1
            ],

            [
                'title'=>'Congratulation',
                'file_name'=>'congratulation_9.gif',
                'extension'=>'gif',
                'album_id'=>1
            ],

            [
                'title'=>'Congratulation',
                'file_name'=>'congratulation_10.gif',
                'extension'=>'gif',
                'album_id'=>1
            ],



            [
                'title'=>'Coffee',
                'file_name'=>'coffee_1.gif',
                'extension'=>'gif',
                'album_id'=>2
            ]
            ,

            [
                'title'=>'Coffee',
                'file_name'=>'coffee_2.gif',
                'extension'=>'gif',
                'album_id'=>2
            ]
            ,

            [
                'title'=>'Coffee',
                'file_name'=>'coffee_3.gif',
                'extension'=>'gif',
                'album_id'=>2
            ]
            ,
            [
                'title'=>'Coffee',
                'file_name'=>'coffee_4.gif',
                'extension'=>'gif',
                'album_id'=>2
            ]
            ,
            [
                'title'=>'Coffee',
                'file_name'=>'coffee_5.gif',
                'extension'=>'gif',
                'album_id'=>2
            ]
            ,
            [
                'title'=>'Coffee',
                'file_name'=>'coffee_6.gif',
                'extension'=>'gif',
                'album_id'=>2
            ]
            ,
            [
                'title'=>'Coffee',
                'file_name'=>'coffee_7.gif',
                'extension'=>'gif',
                'album_id'=>2
            ]
            ,
            [
                'title'=>'Coffee',
                'file_name'=>'coffee_8.gif',
                'extension'=>'gif',
                'album_id'=>2
            ]
            ,
            [
                'title'=>'Coffee',
                'file_name'=>'coffee_9.gif',
                'extension'=>'gif',
                'album_id'=>2
            ]
            ,

            [
                'title'=>'Coffee',
                'file_name'=>'coffee_10.gif',
                'extension'=>'gif',
                'album_id'=>2
            ]
        ]);
    }
}
