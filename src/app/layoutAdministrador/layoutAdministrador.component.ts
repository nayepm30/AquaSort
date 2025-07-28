import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router'; // ✅ Importa RouterOutlet

@Component({
  selector: 'app-header-usuario',
  standalone: true, // ✅ Marca el componente como standalone
  imports: [RouterOutlet], // ✅ Agrega RouterOutlet aquí
  templateUrl: './layoutAdministrador.component.html',
  styleUrls: ['./layoutAdministrador.component.css']
})
export class LayoutAdministrador {
  isSidebarCollapsed = false;
  isProductSubmenuOpen = false;
  isPurchasesSubmenuOpen = false;
  isProveedoresSubmenuOpen = false;

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

  toggleProveedoresSubmenu() {
    this.isProveedoresSubmenuOpen = !this.isProveedoresSubmenuOpen;
  }
}
