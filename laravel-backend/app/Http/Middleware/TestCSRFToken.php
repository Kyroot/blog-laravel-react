<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TestCSRFToken
{
    public function handle(Request $request, Closure $next)
    {
        // Simulate CSRF token validation
        $clientToken = $request->input('_token');
        $serverToken = $request->session()->token(); // Change to match your token retrieval logic

        // Log the client and server tokens for testing
        Log::info('Client CSRF Token: ' . $clientToken);
        Log::info('Server CSRF Token: ' . $serverToken);

        // Simulate successful or failed CSRF token validation
       return ['client'=>$clientToken,'server'=>$serverToken];
    }
}
