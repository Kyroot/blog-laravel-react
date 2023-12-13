<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
// use Symfony\Component\HttpFoundation\Response;

class Cors
{
   /**
 * Handle an incoming request.
 *
 * @param  \Illuminate\Http\Request  $request
 * @param  \Closure  $next
 * @return \Illuminate\Http\Response
 */
    public function handle($request, Closure $next) {

         return $next($request)
            ->header('Access-Control-Allow-Origin', 'http://localhost:3000') // Set the specific origin
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Allow-Headers', 'X-Requested-With, X-CSRF-TOKEN, Content-Type, X-Token-Auth, Authorization')
            ->header('Access-Control-Allow-Credentials', 'true');  // Important for sending cookies
    }
}
