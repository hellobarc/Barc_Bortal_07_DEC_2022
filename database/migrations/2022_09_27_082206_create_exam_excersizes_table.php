<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamExcersizesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exam_excersizes', function (Blueprint $table) {
            $table->id();
            $table->integer("exam_id");
            $table->string("excersize_name");
            $table->string("excersize_module");
            $table->integer("time_limit");
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
        Schema::dropIfExists('exam_excersizes');
    }
}
