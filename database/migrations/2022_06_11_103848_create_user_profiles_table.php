<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->enum('user_type',['student','moderator','admin','parent','instructor','content'])->nullable();
            $table->string('phone')->nullable();
            $table->string('avatar')->nullable();
            $table->string('house')->nullable();
            $table->string('road')->nullable();
            $table->string('subcity')->nullable();
            $table->string('city')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('fathers_name')->nullable();
            $table->string('mothers_name')->nullable();
            $table->string('batch')->nullable();
            $table->string('education')->nullable();
            $table->string('occupation')->nullable();
            $table->string('date_of_birth')->nullable();
            $table->string('admission_date')->nullable();
            $table->string('student_id')->nullable();
            $table->string('invoice_number')->nullable();
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
        Schema::dropIfExists('user_profiles');
    }
}



