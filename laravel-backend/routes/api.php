<?php

use App\Http\Controllers\AdminPostController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::apiResource('register', RegisterController::class);
Route::apiResource('/', PostsController::class);
Route::get('test', [TestController::class, 'test']);

Route::controller(AuthController::class)->group(function(){
    Route::post('register','register');
    Route::post('login','login');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::post('admin/dashboard',[AdminPostController::class, 'dashboard']);
});

// Route::middleware('admin')->group(function(){
// });





