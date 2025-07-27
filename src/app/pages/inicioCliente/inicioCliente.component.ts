import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'inicio-cliente',
  templateUrl: './inicioCliente.component.html',
  styleUrls: ['./inicioCliente.component.css']
})
export class InicioCliente {
  constructor(private router: Router) {}

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
