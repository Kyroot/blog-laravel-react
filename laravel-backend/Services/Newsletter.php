<?php

namespace App\Services;

use \MailchimpMarketing\ApiClient;

class Newsletter{

    public function subscribe(string $email, string $list = null){

        $list ??= config('services.mailchimp.lists.subscribers');
        request()->validate([
            'email' => 'required|email',
        ]);

        $mailchimp = new ApiClient();

        $mailchimp->setConfig([
            'apiKey' => config('services.mailchimp.key'),
            'server' => 'us21'
        ]);

        return $this->client()->lists->addListMember($list, [
            'email_address' => $email,
            'status' => 'subscribed'
        ]);
    }

    protected function client(){

        return (new ApiClient())->setConfig([
            'apiKey' => config('services.mailchimp.key'),
            'server' => 'us21'
        ]);
    }
}
