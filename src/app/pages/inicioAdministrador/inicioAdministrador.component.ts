import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-administrador',
  standalone: true,
  templateUrl: './inicioAdministrador.component.html',
  styleUrls: ['./inicioAdministrador.component.css']
})
export class InicioAdministrador {
  constructor(private router: Router) {}
}