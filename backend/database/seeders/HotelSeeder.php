<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Hotel;

class HotelSeeder extends Seeder
{
    public function run()
    {
        $hoteles = [
            [
                'nombre' => 'Hotel El Dorado',
                'ubicacion' => 'Hermosillo, Sonora',
                'descripcion' => 'Lujoso hotel con vistas espectaculares y servicios de primera clase.',
                'imagen' => 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3',
            ],
            [
                'nombre' => 'Hotel Marina Resort',
                'ubicacion' => 'San Carlos, Sonora',
                'descripcion' => 'Resort frente al mar con acceso directo a la playa y actividades acuáticas.',
                'imagen' => 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3',
            ],
            [
                'nombre' => 'Hotel Mountain View',
                'ubicacion' => 'Sierra Vista, Sonora',
                'descripcion' => 'Hotel boutique en la montaña con ambiente acogedor y vistas panorámicas.',
                'imagen' => 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3',
            ],
        ];

        foreach ($hoteles as $hotel) {
            Hotel::create($hotel);
        }
    }
}
