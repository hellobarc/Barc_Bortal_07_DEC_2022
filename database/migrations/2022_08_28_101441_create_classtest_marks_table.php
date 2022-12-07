<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClasstestMarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('classtest_marks', function (Blueprint $table) {
            $table->id();
            $table->integer('class_test_id');
            $table->integer('student_id');
            $table->integer('instructor_id');
            $table->integer('marks')->nullable()->default('0');
            $table->enum('status',['pending','absent','present']);
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
        Schema::dropIfExists('classtest_marks');
    }
}
