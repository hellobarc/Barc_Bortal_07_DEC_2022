<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuizzesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quizzes', function (Blueprint $table) {
            $table->id();
            $table->integer("lesson_id");
            $table->text("question");
            $table->text("instruction")->nullable();
            $table->string("quiz_type")->default('multiple_choise'); // multiple choise /  drag drop reorder / fill in the blanks / true false / select / radio / check_box_multiple
            $table->unsignedInteger("marks")->default(0);
            $table->unsignedInteger("time_limit")->nullable()->default(0);
            $table->string("status")->default('active');
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
        Schema::dropIfExists('quizzes');
    }
}
