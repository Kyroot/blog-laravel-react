<?php

namespace App\Http\Controllers;

use Illuminate\Validation\ValidationException;

class SessionController extends Controller
{

    public function create()
    {

        return view('session.create');
    }

    public function store()
    {
        //validate the request
        $attributes = request()->validate([
            "email" => "required|email",
            "password" => "required",
        ]);



        //attempt to authentification and log in a user
        //based on provided credentials
        if (!auth()->attempt($attributes)) {
            //auth. failed
            // return back()
            //     ->withInput()
            //     ->withErrors(["email" => "Your provided credentials could not be verified"]);
            //alternative
            throw ValidationException::withMessages(["email" => "Your provided credentials could not be verified"]);
        }

        session()->regenerate();

        //redirect with success flash message
        return redirect('/')->with('success', 'Logged in successfully');

    }

    public function destroy()
    {
        // dd(request());
        auth()->logout();

        return redirect('/')->with('success', 'Goodbuy!');
    }
}
