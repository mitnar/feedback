<?php

namespace App\Contracts;

use App\Models\ClientRequest;

interface ClientRequestContract
{
    public function store(array $data): ClientRequest;
}
