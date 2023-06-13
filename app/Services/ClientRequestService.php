<?php

namespace App\Services;

use App\Models\ClientRequest;
use App\Contracts\ClientRequestContract;
use Auth;
use App\Models\File;

class ClientRequestService implements ClientRequestContract
{
    public function store(array $data): ClientRequest
    {
        $clientRequest = new ClientRequest();
        $clientRequest->fill($data);

        $user = Auth::user();
        $clientRequest = $user->clientRequests()->save($clientRequest);

        $file = $this->uploadFile($data['file']);

        if(!is_null($file)) {
            $file->clientRequest()->associate($clientRequest);
            $file->save();
        }

        return $clientRequest->load('file');
    }

    /* для простоты реализации метод загрузки файла реализую тут
     однако лучше всего для загрузки фапйлов определить отдельный сервис */
    private function uploadFile($file)
    {
        if(empty($file)) {
            return null;
        }

        $title = $file->getClientOriginalName();
        $url = $file->store('public');

        $file = File::create(compact('title', 'url'));

        return $file;
    }
}
