<?php

namespace App\Services;

use GuzzleHttp\Exception\RequestException as ExceptionRequestException;
use Illuminate\Support\Facades\Http;

class Perspective{

    public static function cURLperspective($comment, $attribute){

        $attribute_name = strtoupper($attribute);

        try{
            $apiKey = config('services.perspective.key');
        $response = Http::withHeaders(['Content-Type' => 'application/json'])
        ->post('https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=' . $apiKey, [
            'comment' => [
                'text' => $comment,
            ],
            'languages' => ['en'],
            'requestedAttributes' => [
                $attribute_name => new \stdClass(), // Create an empty object
            ],
        ]);

        return $response->json();

    }catch(ExceptionRequestException $e){

        return $e->getMessage();
        }
    }
}
