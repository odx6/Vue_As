<?php

namespace App\Http\Controllers;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;


class RoleController extends Controller
{

    public function create(): Response
    {
        return Inertia::render('Roles/RolesHome');
    }

    /**
     * Handle an incoming authentication request.
     */
   
}
