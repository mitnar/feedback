<?php

namespace App\Services;

use App\Models\ClientRequest;
use App\Contracts\ClientRequestContract;
use Auth;

class ClientRequestService implements ClientRequestContract
{
    public function store(array $data): ClientRequest
    {
        $clientRequest = new ClientRequest();
        $clientRequest->fill($data);

        $user = Auth::user();
        $clientRequest = $user->clientRequests()->save($clientRequest);

        return $clientRequest;
    }
}
