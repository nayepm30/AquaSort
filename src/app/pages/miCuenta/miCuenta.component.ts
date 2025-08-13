import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mi-cuenta',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './miCuenta.component.html',
  styleUrls: ['./miCuenta.component.css']
})
export class MiCuenta  {
  
 
  guardarDatos() {
   
  }
}
