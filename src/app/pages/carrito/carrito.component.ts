// carrito.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class Carrito {
  constructor(private router: Router) {}

  cerrarSesion(): void {
    // Lógica para cerrar sesión
    this.router.navigate(['/login']);
  }
}