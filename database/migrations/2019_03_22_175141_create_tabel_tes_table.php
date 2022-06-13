<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTabelTesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tabel_tes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('isi');
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
       // DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists('tabel_tes');
       // DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
