<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class KuisHasil extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kuis_hasil', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('kuis_');
            $table->string('kode', 20)->nullable();
            $table->string('judul', 100);
            $table->text('keterangan')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
