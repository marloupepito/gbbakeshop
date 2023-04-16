<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('images', function (Blueprint $table) {
            $table->id('key');
            $table->string('branchid')->nullable();
            $table->string('userid')->nullable();
            $table->string('from')->nullable();
            $table->string('images')->nullable();
            $table->string('date')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

          Schema::create('charges', function (Blueprint $table) {
            $table->id('key');
            $table->string('branch_id')->nullable();
            $table->string('userid')->nullable();
            $table->string('name')->nullable();
            $table->string('description')->nullable();
            $table->string('amount')->nullable();
            $table->string('date')->nullable();
            $table->string('status')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('credits', function (Blueprint $table) {
            $table->id('key');
            $table->string('branch_id')->nullable();
            $table->string('userid')->nullable();
            $table->string('name')->nullable();
            $table->string('description')->nullable();
            $table->string('amount')->nullable();
            $table->string('date')->nullable();
            $table->string('status')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('expenses', function (Blueprint $table) {
            $table->id('key');
            $table->string('branchid')->nullable();
            $table->string('userid')->nullable();
            $table->string('name')->nullable();
            $table->string('description')->nullable();
            $table->string('amount')->nullable();
            $table->string('images')->nullable();
            $table->string('date')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });


         Schema::create('records', function (Blueprint $table) {
            $table->id('key');
            $table->string('branch_id')->nullable();
            $table->string('bread_id')->nullable();
            $table->string('baker_id')->nullable();
            $table->string('bread_name')->nullable();
            $table->string('beginning')->nullable();
            $table->string('production')->nullable();
            $table->string('target')->nullable();
            $table->string('kilo')->nullable();
            $table->string('price')->nullable();
            $table->string('total')->nullable();
            $table->string('breadout')->nullable();
            $table->string('charge')->nullable();
            $table->string('overs')->nullable();
            $table->string('remaining')->nullable();
            $table->string('soldout')->nullable();
            $table->string('remark1')->nullable();
            $table->string('remark2')->nullable();
            $table->string('remark3')->nullable();
            $table->string('remark4')->nullable();
            $table->string('baker')->nullable();
            $table->string('assigned1')->nullable();
            $table->string('assigned2')->nullable();
            $table->string('assigned3')->nullable();
            $table->string('sales')->nullable();
            $table->string('status')->nullable();
            $table->string('date')->nullable();
            $table->string('date2')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('key')->nullable();
            $table->string('branch_id')->nullable();
            $table->string('name')->nullable();
            $table->string('shift')->nullable();
            $table->string('mobile')->nullable();
            $table->string('gender')->nullable();
            $table->string('position')->nullable();
            $table->string('username')->nullable();
            $table->string('password')->nullable();
            $table->string('status')->nullable();
            $table->string('year')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('branches', function (Blueprint $table) {
            $table->id();
            $table->string('key')->nullable()->unique();
            $table->string('branch_name')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        // Schema::create('branch', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('path')->nullable()->unique();
        //     $table->string('title')->nullable();
        //     $table->string('icon')->nullable();
        //     $table->rememberToken();
        //     $table->timestamps();
        // });


        Schema::create('branch_ingredients', function (Blueprint $table) {
            $table->id();
            $table->string('branch_id')->nullable();
            $table->string('ingredients_name')->nullable();
            $table->float('ingredients_quantity')->nullable();
            $table->string('bind_name')->nullable();
            $table->string('notify')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('branch_bread', function (Blueprint $table) {
            $table->id('key');
            $table->string('branch_id')->nullable();
            $table->string('bread_name')->nullable();
            $table->string('quantity')->nullable();
            $table->string('price')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        // Schema::create('branch_bread_sold', function (Blueprint $table) {
        //     $table->id('key');
        //     $table->string('branch_id')->nullable();
        //     $table->string('bread_name')->nullable();
        //     $table->string('quantity')->nullable();
        //     $table->string('price')->nullable();
        //     $table->rememberToken();
        //     $table->timestamps();
        // });

        // Schema::create('branch_bread_out', function (Blueprint $table) {
        //     $table->id('key');
        //     $table->string('branch_id')->nullable();
        //     $table->string('bread_name')->nullable();
        //     $table->string('quantity')->nullable();
        //     $table->string('price')->nullable();
        //     $table->rememberToken();
        //     $table->timestamps();
        // });


        
        Schema::create('production', function (Blueprint $table) {
            $table->id();
            $table->string('random_id')->nullable();
            $table->bigInteger('branch_ingredients_id')->nullable();
            $table->bigInteger('branch_bread_id')->nullable();
            $table->string('branch_id')->nullable();
            $table->string('bread_name')->nullable();
            $table->string('bind')->nullable();
            $table->string('code_name')->nullable();
            $table->string('ingredients_name')->nullable();
            $table->string('production_quantity')->nullable();
            $table->string('quantity')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        // Schema::create('ingredients', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('ingredients_name')->nullable();
        //     $table->string('ingredients_quantity')->nullable();
        //     $table->string('ingredients_quantity_description')->nullable();
        //     $table->rememberToken();
        //     $table->timestamps();
        // });

         Schema::create('ingredients_request', function (Blueprint $table) {
            $table->id('key');
            $table->string('branch_id')->nullable();
            $table->string('ingredients_id')->nullable();
            $table->string('request_id')->nullable();
            $table->string('ingredients_name')->nullable();
            $table->float('ingredients_quantity')->nullable();
            $table->string('ingredients_bind')->nullable();
            $table->string('ingredients_status')->nullable();
            $table->string('notify')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });



        //   Schema::create('inventory_production', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('branch_id')->nullable();
        //     $table->string('branch_name')->nullable();
        //     $table->string('production_id')->nullable();
        //     $table->string('bread_name')->nullable();
        //     $table->string('quantity')->nullable();
        //     $table->string('price')->nullable();
        //     $table->string('total')->nullable();
        //     $table->rememberToken();
        //     $table->timestamps();
        // });

        

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
