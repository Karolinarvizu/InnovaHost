<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\ReservacionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Rutas de reservaciones
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/reservaciones', [ReservacionController::class, 'store']);
    Route::get('/reservaciones', [ReservacionController::class, 'index']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Rutas públicas de hoteles
Route::get('/hoteles', [HotelController::class, 'index']);
Route::get('/hoteles/{id}', [HotelController::class, 'show']);

// Rutas protegidas de hoteles (requieren autenticación)
Route::middleware('auth:api')->group(function () {
    Route::post('/hoteles', [HotelController::class, 'store']);
    Route::put('/hoteles/{id}', [HotelController::class, 'update']);
    Route::delete('/hoteles/{id}', [HotelController::class, 'destroy']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api')->name('logout');
    Route::post('/refresh', [AuthController::class, 'refresh'])->middleware('auth:api')->name('refresh');
    Route::post('/me', [AuthController::class, 'me'])->middleware('auth:api')->name('me');
    Route::get('/hoteles', [HotelController::class, 'index']);
});



