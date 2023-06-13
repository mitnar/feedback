<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\User;

class AuthenticatedController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    protected function authorizedUser()
    {
        return User::with(['clientRequests', 'clientRequests.file'])
            ->find(Auth::id());
    }
}
