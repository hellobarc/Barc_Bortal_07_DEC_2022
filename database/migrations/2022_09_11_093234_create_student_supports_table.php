<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentSupportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_supports', function (Blueprint $table) {
            $table->id();
            $table->integer('student_id');
            $table->integer('user_id')->nullable();
            $table->text('subject');
            $table->longText('message');
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
        Schema::dropIfExists('student_supports');
    }
}
