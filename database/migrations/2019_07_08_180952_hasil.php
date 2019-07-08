<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Hasil extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hasil', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('mapel_kuis_id');
            $table->datetime('start');
            $table->datetime('end')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('mapel_kuis_id')->references('id')->on('mapel_kuis');
        });
        Schema::create('hasil_detail', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('hasil_id');
            $table->integer('kuis_soal_id');
            $table->integer('soal_id');
            $table->json('jawaban')->nullable();
            $table->decimal('point')->nullable();
            $table->foreign('hasil_id')->references('id')->on('hasil');
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
