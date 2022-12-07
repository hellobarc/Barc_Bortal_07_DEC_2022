<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSupportAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('support_answers', function (Blueprint $table) {
            $table->id();
            $table->integer('ticket_id');
            $table->integer('user_id');
            $table->longText('reply_message');
            $table->enum('type',['message','reply']);
            $table->enum('status',['open','close','processing']);
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
        Schema::dropIfExists('support_answers');
    }
}
