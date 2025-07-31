// solicitudesHistorial.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { SolicitudesService } from './solicitudes.service';

@Component({
  selector: 'solicitudes-historial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitudesHistorial.component.html',
  styleUrls: ['./solicitudesHistorial.component.css']
})
export class SolicitudesHistorial {
  pedidosAceptados: any[] = [];

 
}