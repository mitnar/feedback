<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Contracts\ClientRequestContract;
use App\Services\ClientRequestService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(ClientRequestContract::class, ClientRequestService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
