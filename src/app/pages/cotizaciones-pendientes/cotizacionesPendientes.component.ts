import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotizaciones-pendientes',
  imports: [CommonModule],
  templateUrl: './cotizacionesPendientes.component.html',
  styleUrls: ['./cotizacionesPendientes.component.css']
})
export class CotizacionesPendientes implements OnInit {

  constructor(private router: Router) {}

  cotizaciones: any[] = [];

  ngOnInit(): void {
    this.cotizaciones = [
      {
        idCotizacion: 1,
        estatus: 'Pendiente',
        fecha_creacion: '2025-08-05',
        domicilio: 'Av. Principal 123, Col. Centro',
        tipo_instalacion: 'Zona Industrial',
        detalles: [
          { producto: { nombre: 'Material eléctrico' } },
          { producto: { nombre: 'Equipo de seguridad' } }
        ]
      },
      {
        idCotizacion: 2,
        estatus: 'Respondida',
        fecha_creacion: '2025-08-03',
        domicilio: 'Camino Rural 456, Ejido Libertad',
        tipo_instalacion: 'Zona Rural',
        detalles: [
          { producto: { nombre: 'Paneles solares' } }
        ],
        detalleCostos: [
          { descripcion: 'Filtro de agua', monto: 200 },
          { descripcion: 'Instalación', monto: 100 },
          { descripcion: 'Materiales', monto: 100 }
        ],
        total: 400
      }
    ];
  }

  formatDate(fecha: string | Date): string {
    if (!fecha) return '';
    const date = new Date(fecha);
    return date.toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  aceptarCotizacion(cotizacion: any): void {
    
    // Redirigir a la página de carrito
    this.router.navigate(['/carrito'], {
      state: { cotizacion: cotizacion } // Opcional: enviar datos de la cotización
    });
  }
}