<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return '$request->user()';
// });

Route::get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});


Route::get('/my_account_production/{id}','App\Http\Controllers\RecordsController@my_account_production');
Route::post('/get_branch_charges/{date}/{branchid}','App\Http\Controllers\RecordsController@get_branch_charges');


Route::get('/get_branch_expenses/{id}/{dates}','App\Http\Controllers\ExpensesController@get_branch_expenses');
Route::get('/get_branch_dashboard/{id}/{periodical}','App\Http\Controllers\ExpensesController@get_branch_dashboard');


Route::get('/get_branch_images/{id}/{dates}/{imageid}','App\Http\Controllers\ImagesController@get_branch_images');


Route::get('/get_user_charges/{id}','App\Http\Controllers\ChargesController@get_user_charges');


Route::get('/get_user_credits/{id}','App\Http\Controllers\CreditsController@get_user_credits');
Route::get('/get_record_dates/{id}','App\Http\Controllers\CreditsController@get_record_dates');
