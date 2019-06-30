<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Materi extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('materi', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('kode', 20)->nullable();
            $table->string('judul', 100);
            $table->json('isi');
            $table->foreign('user_id')->references('id')->on('users');
        });

        Schema::create('mapel_materi', function (Blueprint $table) {
            $table->increments('id');
            $table->tinyInteger('type')->comment("1: dir, 2:materi");
            $table->integer('mapel_id');
            $table->integer('materi_id')->nullable();
            $table->string('nama', 25)->nullable();
            $table->integer('parent')->nullable();
            $table->foreign('mapel_id')->references('id')->on('mapel');
            $table->foreign('materi_id')->references('id')->on('materi');
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
