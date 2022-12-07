<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Mohammad Maruf Firoz',
                'email' => 'admin@barc.com',
                'password' => Hash::make('123456'),
                'role_id' => 1, // parent 6 // student 5 //  insturctor 4 // Content developer 3 // Moderator 2 // Super admin 1
            ],
            [
                'name' => 'Rahima Rahman Rimpy',
                'email' => 'moderator@barc.com',
                'password' => Hash::make('123456'),
                'role_id' => 2, // parent 6 // student 5 //  insturctor 4 // Content developer 3 // Moderator 2 // Super admin 1
            ],
            [
                'name' => 'SM. Walid Rahman',
                'email' => 'content@barc.com',
                'password' => Hash::make('123456'),
                'role_id' => 3, // parent 6 // student 5 //  insturctor 4 // Content developer 3 // Moderator 2 // Super admin 1
            ],
            [
                'name' => 'Rashedul Islam',
                'email' => 'instructor@barc.com',
                'password' => Hash::make('123456'),
                'role_id' => 4, // parent 6 // student 5 //  insturctor 4 // Content developer 3 // Moderator 2 // Super admin 1
            ],
            [
                'name' => 'Mr. Daddy or Mom',
                'email' => 'parent@barc.com',
                'password' => Hash::make('123456'),
                'role_id' => 6, // parent 6 // student 5 //  insturctor 4 // Content developer 3 // Moderator 2 // Super admin 1
            ],
            [
                'name' => 'Sultana Munjerin Humyara',
                'email' => 'adviser@barc.com',
                'password' => Hash::make('123456'),
                'role_id' => 7, // parent 6 // student 5 //  insturctor 4 // Content developer 3 // Moderator 2 // Super admin 1
            ],

        ]);
    }
}
