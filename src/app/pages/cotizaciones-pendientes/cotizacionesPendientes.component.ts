import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizaciones-pendientes',
  imports: [CommonModule],
  templateUrl: './cotizacionesPendientes.component.html',
  styleUrls: ['./cotizacionesPendientes.component.css']
})
export class CotizacionesPendientes implements OnInit {

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
        ],
        respuesta: 'Hemos recibido tu cotización y estamos trabajando en ella. Nos pondremos en contacto contigo en breve.'
     
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
        respuesta: 'Hemos recibido tu cotización y estamos trabajando en ella. Nos pondremos en contacto contigo en breve.'
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
}