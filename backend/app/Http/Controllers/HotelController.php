<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hotel;

class HotelController extends Controller
{
    public function index()
    {
        $hoteles = Hotel::with(['habitaciones', 'servicios'])->get();
        return response()->json($hoteles);
    }

    public function show($id)
    {
        $hotel = Hotel::with(['habitaciones', 'servicios'])->findOrFail($id);
        return response()->json($hotel);
    }
}
