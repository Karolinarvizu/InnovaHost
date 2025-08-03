<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('reservas', function (Blueprint $table) {
            // Eliminar columnas antiguas
            $table->dropForeign(['id_cliente']);
            $table->dropForeign(['id_habitacion']);
            $table->dropForeign(['id_servicio']);
            $table->dropColumn(['id_cliente', 'id_habitacion', 'id_servicio', 'fecha_inicio', 'fecha_fin', 'estado']);

            // Agregar nuevas columnas
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('hotel_id')->constrained('hotels')->onDelete('cascade');
            $table->string('nombre_huesped');
            $table->string('email');
            $table->string('telefono', 20);
            $table->date('fecha_entrada');
            $table->date('fecha_salida');
            $table->integer('num_huespedes');
            $table->string('tipo_habitacion');
            $table->decimal('total', 10, 2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('reservas', function (Blueprint $table) {
            // Revertir cambios
            $table->dropForeign(['user_id']);
            $table->dropForeign(['hotel_id']);
            $table->dropColumn([
                'user_id', 'hotel_id', 'nombre_huesped', 'email', 'telefono',
                'fecha_entrada', 'fecha_salida', 'num_huespedes', 'tipo_habitacion',
                'total'
            ]);

            // Restaurar columnas originales
            $table->foreignId('id_cliente')->constrained('clientes')->onDelete('cascade');
            $table->foreignId('id_habitacion')->constrained('habitaciones')->onDelete('cascade');
            $table->foreignId('id_servicio')->nullable()->constrained('servicios')->onDelete('set null');
            $table->date('fecha_inicio');
            $table->date('fecha_fin');
        });
    }
};
