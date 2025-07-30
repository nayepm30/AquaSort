import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Pedido {
  idPedidos: number;
  estatus: string;
  fecha_pedido: Date;
  fecha_entrega?: Date;
  detalles: DetallePedido[];
  total: number;
}

interface DetallePedido {
  producto: {
    nombre: string;
  };
  cantidad: number;
  subtotal: number;
}

@Component({
  selector: 'mis-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './misPedidos.component.html',
  styleUrls: ['./misPedidos.component.css']
})
export class MisPedidos {
  pedidos: Pedido[] = [
    {
      idPedidos: 1,
      estatus: 'Pendiente',
      fecha_pedido: new Date('2023-07-25'),
      detalles: [
        {
          producto: { nombre: 'Filtro de Agua Premium' },
          cantidad: 2,
          subtotal: 179.98
        },
        {
          producto: { nombre: 'Repuestos para Filtro' },
          cantidad: 1,
          subtotal: 45.50
        }
      ],
      total: 225.48
    },
    {
      idPedidos: 2,
      estatus: 'Entregado',
      fecha_pedido: new Date('2023-07-20'),
      fecha_entrega: new Date('2023-07-23'),
      detalles: [
        {
          producto: { nombre: 'Purificador de Agua' },
          cantidad: 1,
          subtotal: 350.00
        }
      ],
      total: 350.00
    }
  ];

  constructor(private router: Router) {}

  formatDate(date: Date | undefined): string {
    if (!date) return '';
    return date.toLocaleDateString('es-MX', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  calcularSubtotal(detalle: DetallePedido): number {
    return detalle.subtotal / detalle.cantidad;
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}