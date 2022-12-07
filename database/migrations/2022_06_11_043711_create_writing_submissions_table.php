<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWritingSubmissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('writing_submissions', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('writing_question_id');
            $table->longText('task_text');
            $table->float('time_used');
            $table->longText('feedback')->nullable();
            $table->float('marks');
            $table->enum('status',['submitted','assessed'])->default('submitted');
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
        Schema::dropIfExists('writing_submissions');
    }
}
