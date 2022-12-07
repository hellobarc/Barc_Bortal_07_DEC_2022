<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionFillblanksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('question_fillblanks', function (Blueprint $table) {
            $table->id();
            $table->integer("question_id");
            $table->text("text");
            $table->enum("is_blank",['no','yes']);
            $table->string("blank_answer");
            $table->integer("serial");
            $table->enum("is_newline",['no','yes']);
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
        Schema::dropIfExists('question_fillblanks');
    }
}
