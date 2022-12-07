<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCourseListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course_lists', function (Blueprint $table) {
            $table->id();
            $table->smallInteger('course_categories_id')->nullable();
            $table->string('course_name');
            $table->string('course_title');
            $table->string('short_description')->nullable();
            $table->string('thumbnail')->nullable();
            $table->string('overview')->nullable();
            $table->string('curriculum')->nullable();
            $table->string('who_should')->nullable();
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
        Schema::dropIfExists('course_lists');
    }
}
