import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // <-- Añade esta línea
import { OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class Home implements OnInit {

  features = [
    {
      title: 'Recolección Inteligente',
      description: 'Sistema automático que captura agua de múltiples fuentes',
      icon: 'water_drop'
    },
    {
      title: 'Clasificación Avanzada',
      description: 'Tecnología para categorizar la calidad del agua',
      icon: 'auto_awesome'
    },
    {
      title: 'Sostenibilidad',
      description: 'Contribuye al cuidado del medio ambiente',
      icon: 'eco'
    }
  ];

  ngOnInit(): void {
    AOS.init({ once: true });
  }
}
