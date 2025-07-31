import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class Inventario {
  productos = [
    { nombre: 'Filtro de agua', categoria: 'Filtros', stock: 25, cantidadAgregar: null },
   
  ];
}
