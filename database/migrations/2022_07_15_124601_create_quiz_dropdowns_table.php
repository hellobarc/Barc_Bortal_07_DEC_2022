<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuizDropdownsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quiz_dropdowns', function (Blueprint $table) {
            $table->id();
            $table->integer('quiz_id');
            $table->text('text')->nullable();
            $table->enum('is_dropdown',['no','yes'])->default('no');
            $table->string('correct_answer')->nullable();
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
        Schema::dropIfExists('quiz_dropdowns');
    }
}
