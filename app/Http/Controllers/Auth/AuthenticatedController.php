<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class AuthenticatedController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    protected function checkAuthorization()
    {
        return ['authenticated' => Auth::check()];
    }
}
