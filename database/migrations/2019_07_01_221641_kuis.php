<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Kuis extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kuis', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('kode', 20)->nullable();
            $table->string('judul', 100);
            $table->text('keterangan')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
        });

        Schema::create('soal', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('kode', 20)->nullable();
            $table->tinyInteger('type')->comment("1: pilgan, 2:pilgan(multijawaban), 3:benar/salah, 4:menjodohkan, 5:isian singkat, 6:essay");
            $table->json('pertanyaan')->nullable();
            $table->json('jawaban')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
        });

        Schema::create('kuis_soal', function (Blueprint $table) {
            $table->increments('id');
            $table->tinyInteger('type')->comment("1: dir/bab, 2:pertanyaan");
            $table->integer('kuis_id');
            $table->integer('soal_id')->nullable();
            $table->string('nama', 25)->nullable();
            $table->string('keterangan', 100)->nullable();
            $table->integer('parent')->nullable();
            $table->json('settings')->nullable();
            $table->foreign('kuis_id')->references('id')->on('kuis');
            $table->foreign('soal_id')->references('id')->on('soal');
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
