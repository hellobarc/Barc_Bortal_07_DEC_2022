<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuizFillblanksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quiz_fillblanks', function (Blueprint $table) {
            $table->id();
            $table->integer('quiz_id');
            $table->text('text')->nullable();
            $table->enum('is_blank',['no','yes'])->default('no');
            $table->string('blank_answer')->nullable();
            $table->string('serial')->nullable();
            $table->enum('is_newline',['no','yes'])->default('no');
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
        Schema::dropIfExists('quiz_fillblanks');
    }
}
