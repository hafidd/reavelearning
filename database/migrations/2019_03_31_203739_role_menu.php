<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RoleMenu extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //role
        Schema::create('roles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50);
            $table->string('desc', 100);
        });
        //menu
        Schema::create('menus', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50);
            $table->string('path', 25);
            $table->string('component', 25)->nullable();
            $table->string('desc', 100);
            $table->integer('order');
            $table->integer('parent')->nullable();
            $table->string('icon', 50)->nullable();
            $table->json('apiendpoints')->nullable();
            $table->json('paths')->nullable()->default('[]');
        });
        //role-menu
        Schema::create('menu_role', function (Blueprint $table) {
            $table->integer('role');
            $table->integer('menu');
            $table->foreign('role')->references('id')->on('roles');
            $table->foreign('menu')->references('id')->on('menus');
        });
        //update user
        Schema::table('users', function (Blueprint $table) {
            $table->integer('role')->nullable();
            $table->foreign('role')->references('id')->on('roles');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      //  DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('role');
        });
        Schema::dropIfExists('menurole');
        Schema::dropIfExists('roles');
        Schema::dropIfExists('menus');
     //   DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
