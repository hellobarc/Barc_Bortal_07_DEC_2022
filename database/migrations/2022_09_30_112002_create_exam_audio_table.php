<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamAudioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exam_audio', function (Blueprint $table) {
            $table->id();
            $table->integer("exam_id");
            $table->string("title");
            $table->text("description");
            $table->string("image");
            $table->text("file_name");
            $table->text("file_path");
            $table->text("file_extension");
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
        Schema::dropIfExists('exam_audio');
    }
}
