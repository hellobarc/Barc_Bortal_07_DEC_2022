<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWritingFeedbackTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('writing_feedback', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('writing_question_id');
            $table->longText('feedback_text');
            $table->float('ta_1');
            $table->float('ta_2');
            $table->float('ta_3');
            $table->float('cc_1');
            $table->float('cc_2');
            $table->float('cc_3');
            $table->float('lr_1');
            $table->float('lr_2');
            $table->float('lr_3');
            $table->float('gra_1');
            $table->float('gra_2');
            $table->float('gra_3');
            $table->float('total_score');
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
        Schema::dropIfExists('writing_feedback');
    }
}
