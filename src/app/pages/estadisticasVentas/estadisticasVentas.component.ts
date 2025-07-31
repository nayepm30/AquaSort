import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'estadisticas-ventas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticasVentas.component.html',
  styleUrls: ['./estadisticasVentas.component.css']
})
export class EstadisticasVentas {
  tarjetaAlmacenamiento: any[] = [];
}
