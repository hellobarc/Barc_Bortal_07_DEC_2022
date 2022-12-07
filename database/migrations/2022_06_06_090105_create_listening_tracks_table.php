<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateListeningTracksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listening_tracks', function (Blueprint $table) {
            $table->id();
            $table->integer('lesson_id');
            $table->string('title');
            $table->longText('description');
            $table->text('image')->nullable();
            $table->text('file_name');
            $table->text('file_path');
            $table->string('file_extension');
            $table->string('purpose')->nullable(); // reading //
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
        Schema::dropIfExists('listening_tracks');
    }
}

