<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contracts\ClientRequestContract;
use Exception;
use Log;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\ClientRequestCreateRequest;
use App\Models\ClientRequest;
use App\Http\Requests\SetClientRequestAnswerRequest;

class ClientRequestController extends Controller
{
    private $clientRequestService;

    public function __construct(ClientRequestContract $clientRequestService)
    {
        $this->clientRequestService = $clientRequestService;
    }

    public function index()
    {
        return ClientRequest::with('user')
            ->get();
    }

    public function store(ClientRequestCreateRequest $request)
    {
        $clientRequest = null;

        try {
            $clientRequest = $this->clientRequestService->store($request->all());
        } catch(Exception $e) {
            Log::error('ClientRequestController.store: Ошибка при создании заявки: ' . $e->getMessage());
            return response()->noContent(500);
        }

        return $clientRequest;
    }

    public function setAnswer(SetClientRequestAnswerRequest $request, ClientRequest $clientRequest)
    {
        try {
            $clientRequest->answer = $request->answer;
            $clientRequest->save();
        } catch(Exception $e) {
            Log::error('ClientRequestController.store: Ошибка при обновлении ответа: ' . $e->getMessage());
            return response()->noContent(500);
        }

        return $clientRequest;
    }
}
