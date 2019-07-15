<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMapelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mapel_kategori', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nama', 50);
        });

        Schema::create('mapel', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('kategori');
            $table->string('nama', 100);
            $table->string('kode', 30)->nullable();;
            $table->enum('status', ['aktif', 'nonaktif']);
            $table->enum('akses', ['public', 'private']);
            $table->text('keterangan')->nullable();
            $table->json('groups')->nullable();
            $table->boolean('image')->default(false);
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('kategori')->references('id')->on('mapel_kategori');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('mapel', function (Blueprint $table) {
            //
        });
    }
}
