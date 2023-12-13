<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use App\Models\Posts;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;

class PostsController extends Controller
{
    public function index()
    {

        return [
            'posts' => Posts::latest()->filter(request(['search', 'category', 'author']))->paginate(6)->withQueryString(),
            'categories' => Category::all(),
            'currentCategory' => Category::firstWhere('slug', request('category')),
            // 'posts'=>Post::latest()->with('category','author')->get()
        ];
    }

    public function show(Posts $post)
    {

        $resp = [
            'post' =>  $post,
            'comments' => $post->comments
        ];
        return response()->json($resp);
    }
}
