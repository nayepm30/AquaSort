import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes-pendientes',
  templateUrl: './solicitudesPendientes.component.html',
  styleUrls: ['./solicitudesPendientes.component.css']
})
export class SolicitudesPendientes implements OnInit {
  solicitudes = [
    {
      nombre: 'Sandra Ponce',
      telefono: '1234567890',
      direccion: 'Calle Falsa 123',
      referencia: 'Casa azul con portón negro'
    },
    {
      nombre: 'Luis Martínez',
      telefono: '9876543210',
      direccion: 'Av. Reforma 456',
      referencia: 'Frente al parque'
    },
    {
      nombre: 'Carla Gómez',
      telefono: '5551234567',
      direccion: 'Calle 5 de Mayo #89',
      referencia: 'Tercer piso, timbre rojo'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
