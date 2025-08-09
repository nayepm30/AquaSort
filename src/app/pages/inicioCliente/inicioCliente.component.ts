import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'inicio-cliente',
  templateUrl: './inicioCliente.component.html',
  styleUrls: ['./inicioCliente.component.css']
})
export class InicioCliente implements OnInit {
  userName: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Aquí podrías obtener el nombre del usuario desde tu servicio de autenticación real
    // Por ejemplo: this.userName = this.authService.getUserName();
    // Por ahora lo simulo:
    this.userName = localStorage.getItem('userName') || 'Cliente';
  }

  cerrarSesion(): void {
    // Aquí debes limpiar el token o sesión y luego redirigir
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }
}
