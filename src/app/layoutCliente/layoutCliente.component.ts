import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'layout-cliente',
  imports: [RouterModule],
  templateUrl: './layoutCliente.component.html',
  styleUrl: './layoutCliente.component.css'
})
export class LayoutCliente {
  constructor(private router: Router) {}

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

