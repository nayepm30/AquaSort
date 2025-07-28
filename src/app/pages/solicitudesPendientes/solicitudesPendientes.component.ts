import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'solicitudes-pendientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitudesPendientes.component.html',
  styleUrls: ['./solicitudesPendientes.component.css']
})
export class SolicitudesPendientes {
  pedidos = [
    {
      numeroPedido: 'PED001',
      nombre: 'Juan Pérez',
      direccion: 'Calle 123, Col. Centro',
      referencia: 'Casa azul con portón verde',
      cantidadProductos: 3,
      total: 450,
      fecha: '2025-07-25'
    },
    {
      numeroPedido: 'PED002',
      nombre: 'María López',
      direccion: 'Av. Reforma #456',
      referencia: 'Frente a la tienda OXXO',
      cantidadProductos: 5,
      total: 780,
      fecha: '2025-07-27'
    },
    {
      numeroPedido: 'PED003',
      nombre: 'Carlos Ramírez',
      direccion: 'Privada Palma 87',
      referencia: 'Casa con reja negra',
      cantidadProductos: 2,
      total: 250,
      fecha: '2025-07-28'
    }
  ];

  aceptarPedido(pedido: any) {
    console.log('Pedido aceptado:', pedido.numeroPedido);
    // Aquí podrías enviar la acción al backend o eliminar el pedido de la lista
  }

  rechazarPedido(pedido: any) {
    console.log('Pedido rechazado:', pedido.numeroPedido);
    // Igual aquí puedes manejar el rechazo
  }
}
