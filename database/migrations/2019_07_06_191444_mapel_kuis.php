<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class MapelKuis extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mapel_kuis', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('mapel_id');
            $table->integer('kuis_id');
            $table->string('group', 50)->nullable();
            $table->json('settings')->nullable();
            $table->boolean('published')->default(false);
            $table->foreign('kuis_id')->references('id')->on('kuis');
            $table->foreign('mapel_id')->references('id')->on('mapel');
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
