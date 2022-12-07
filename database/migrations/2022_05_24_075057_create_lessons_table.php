<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLessonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lessons', function (Blueprint $table) {
            $table->id();
            $table->integer('course_list_id');
            $table->integer('unit_id');
            $table->integer('course_module_id');
            $table->string('title');
            $table->text('description')->nullable();
            $table->text('prerequisite')->nullable();
            $table->string('template',50)->default('reading_with_quiz'); //reading with quiz //reading without quiz // Audio with quiz // Audio without quiz/ Video with quiz // Video without quiz
            $table->string('is_extra',5)->default('no'); //no // yes = Extra table e onek extrea create kora jabe //PDF // Youtube channel // Video // Audio // Image //
            $table->integer('extrea_id')->nullable(); // extra content er id
            $table->integer('study_hour')->nullable(); // extra content er id
            $table->integer('study_minutes')->nullable(); // extra content er id
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
        Schema::dropIfExists('lessons');
    }
}
