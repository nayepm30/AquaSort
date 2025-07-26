import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-usuario',
  templateUrl: './inicioUsuario.component.html',
  styleUrls: ['./inicioUsuario.component.css']
})
export class InicioUsuario {
  isSidebarCollapsed = false;
  isProductSubmenuOpen = false;
  isPurchasesSubmenuOpen = false; // Propiedad añadida para controlar el submenú de Compras

  constructor(private router: Router) {}

  cerrarSesion() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  togglePurchasesSubmenu() {
    this.isPurchasesSubmenuOpen = !this.isPurchasesSubmenuOpen;
  }

  toggleProductSubmenu() {
    this.isProductSubmenuOpen = !this.isProductSubmenuOpen;
  }
}