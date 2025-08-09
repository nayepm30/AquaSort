import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'inicio-cliente',
  imports: [CommonModule, RouterLink],
  templateUrl: './inicioCliente.component.html',
  styleUrls: ['./inicioCliente.component.css']
})
export class InicioCliente implements OnInit {
  userName: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Obtener nombre del usuario desde localStorage
    this.userName = localStorage.getItem('userName') || 'Cliente';
  }

  cerrarSesion(): void {
    // Limpiar datos de sesión
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }

  // Métodos alternativos para navegación si se prefiere
  irACarrito(): void {
    this.router.navigate(['/carrito']);
  }

  irACotizaciones(): void {
    this.router.navigate(['/cotizacionesPendientes']);
  }
}