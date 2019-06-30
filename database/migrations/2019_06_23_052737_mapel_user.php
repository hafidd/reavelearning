<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class MapelUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mapel_user_log', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('mapel_id');
            $table->string('group', 50)->nullable();
            $table->timestamp('time')->useCurrent();
            $table->tinyInteger('action')->default(1)->comment('1=pendaftaran,2=diterima,3=ditolak,4=ubahgrup,5=keluar');
            $table->tinyInteger('status')->default(1);
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('mapel_id')->references('id')->on('mapel');
        });

        Schema::create('mapel_user', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('mapel_id');
            $table->string('group', 50)->nullable();
            $table->foreign('user_id')->references('id')->on('users');
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
