<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClassTestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('class_tests', function (Blueprint $table) {
            $table->id();
            $table->string('test_name');
            $table->string('test_date');
            $table->integer('module_id');
            $table->integer('batch_id');
            $table->integer('unit_id');
            $table->enum('type',['class','exam']);
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
        Schema::dropIfExists('class_tests');
    }
}
