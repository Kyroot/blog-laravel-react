<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Posts;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class AdminPostController extends Controller
{

    public function dashboard(){

        return response()->json(['posts' => Posts::all()]);
    }

    public function index()
    {
        return view('admin.posts.index', [
            'posts' => Posts::paginate(50)
        ]);
    }


    public function create()
    {

        return view('admin.posts.create');
    }


    protected function validatePost(?Posts $post = null): array
    {

        $post ??= new Posts();

        return request()->validate([
            'title' => 'required',
            'slug' => ['required', Rule::unique('posts', 'slug')->ignore($post)],
            'thumbnail' => $post->exists ? ['image'] : ['required','image'],
            'excerpt' => 'required',
            'body' => 'required',
            'category_id' => ['required', Rule::exists('categories', 'id')]
        ]);
    }

    public function store()
    {

        $attributes = $this->validatePost();

        $attributes = array_merge($this->validatePost(), [
            'user_id' => auth()->id(),
            'thumbnail' => request()->file('thumbnail')->store('thumbnails'),
        ]);

        Posts::create($attributes);

        return redirect('/');
    }

    public function edit(Posts $post)
    {
        return view('admin.posts.edit', ['post' => $post]);
    }

    public function update(Posts $post)
    {

        $attributes = $this->validatePost();

        if (isset($attributes['thumbnail'])) {
            $attributes['thumbnail'] = request()->file('thumbnail')->store('thumbnails');
        }

        $post->update($attributes);

        return back()->with('success', 'Post updated successfully');
    }

    public function destroy(Posts $post)
    {
        $post->delete();

        return back()->with('success', 'Post deleted');
    }
}
