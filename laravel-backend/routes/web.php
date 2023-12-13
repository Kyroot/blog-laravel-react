<?php

use App\Http\Controllers\PostsController;
use App\Http\Controllers\RegisterController;
use App\Http\Middleware\TestCSRFToken;
use App\Models\Category;
use App\Models\Posts;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Route::get('/post/{post:slug}', [PostsController::class, 'show']);

// Route::get('search', [PostsController::class, 'index']);

// Route::get('/', function () {

//     $posts = Posts::latest()->filter(request(['search', 'category', 'author']))->paginate(6)->withQueryString();
//     $categories = Category::all();

//     return [
//         'isLoggedIn' => Auth::check(),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//         'posts' => $posts,
//         'categories' => $categories,
//         'currentCategory' => Category::firstWhere('slug', request('category'))
//     ];
// })->name('home');


// Route::get('register', [RegisterController::class, 'index']);

// Route::post('/register', [RegisterController::class, 'store']);

