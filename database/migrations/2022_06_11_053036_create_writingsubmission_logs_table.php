<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWritingsubmissionLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('writingsubmission_logs', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('writing_question_id');
            $table->integer('start_time');
            $table->integer('stop_time');
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
        Schema::dropIfExists('writingsubmission_logs');
    }
}
