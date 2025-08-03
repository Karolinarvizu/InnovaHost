<?php

namespace App\Http\Controllers;

use App\Models\Reservacion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ReservacionController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'hotel_id' => 'required|exists:hotels,id',
            'fecha_entrada' => 'required|date|after:today',
            'fecha_salida' => 'required|date|after:fecha_entrada',
            'num_huespedes' => 'required|integer|min:1|max:4',
            'tipo_habitacion' => 'required|in:standard,deluxe,suite',
            'nombre_huesped' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'telefono' => 'required|string|max:20',
            'total' => 'required|numeric|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $reservacion = Reservacion::create([
            'user_id' => Auth::id(),
            'hotel_id' => $request->hotel_id,
            'fecha_entrada' => $request->fecha_entrada,
            'fecha_salida' => $request->fecha_salida,
            'num_huespedes' => $request->num_huespedes,
            'tipo_habitacion' => $request->tipo_habitacion,
            'nombre_huesped' => $request->nombre_huesped,
            'email' => $request->email,
            'telefono' => $request->telefono,
            'total' => $request->total,
            'estado' => 'pendiente'
        ]);

        return response()->json($reservacion, 201);
    }

    public function index(Request $request)
    {
        $query = Reservacion::query();
        
        if ($request->user_id) {
            $query->where('user_id', $request->user_id);
        }

        $reservaciones = $query->with(['hotel'])->latest()->get();
        
        return response()->json($reservaciones);
    }
}
