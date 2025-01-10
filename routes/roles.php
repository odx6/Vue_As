<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;

Route::middleware('auth')->group(function () {
    Route::get('roles', [RoleController::class,'create'])
        ->name('role.view');

    
});