<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'nombre',
        'ubicacion',
        'descripcion',
        'imagen'
    ];

    public function habitaciones()
    {
        return $this->hasMany(Habitacion::class, 'id_hotel');
    }

    public function servicios()
    {
        return $this->hasMany(Servicio::class, 'id_hotel');
    }

    public function reservas()
    {
        return $this->hasManyThrough(
            Reserva::class,
            Habitacion::class,
            'id_hotel',
            'id_habitacion'
        );
    }
}
