<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamSubmissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exam_submissions', function (Blueprint $table) {
            $table->id();
            $table->integer("user_id");
            $table->integer("exam_id");
            $table->integer("excersize_id");
            $table->integer("question_id");
            $table->string("question_type");
            $table->integer("question_ans_id");
            $table->text("answer_text");
            $table->string("status");
            $table->float("marks_obtained");
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
        Schema::dropIfExists('exam_submissions');
    }
}
