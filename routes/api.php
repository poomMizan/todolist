<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/items', [ItemController::class, 'index']);
Route::apiResource('/items', ItemController::class);
Route::post('/upload', [ItemController::class, 'upload']);
// Route::group(['middleware' => 'auth'], function(){
//     Route::resource('/items', 'ItemController', ['except' => ['index']] );
// });





