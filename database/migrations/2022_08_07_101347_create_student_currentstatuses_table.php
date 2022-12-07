<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentCurrentstatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_currentstatuses', function (Blueprint $table) {
            $table->id();
            $table->integer('student_id'); // user_id
            $table->integer('current_course');
            $table->integer('current_unit');
            $table->integer('parent_id'); // Parent_id 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student_currentstatuses');
    }
}
