<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\AuthenticatedController;
use App\Http\Controllers\ClientRequestController;

Route::get('/', function () {
    return view('welcome');
})->name('main');

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::post('getAuthorizedUser', [AuthenticatedController::class, 'authorizedUser']);

Route::resource('clientRequests', ClientRequestController::class)->only(['index', 'store']);

Route::post('clientRequests/{clientRequest}/setAnswer', [ClientRequestController::class, 'setAnswer']);
