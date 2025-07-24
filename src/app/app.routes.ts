import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Asegúrate de que la ruta de importación sea correcta
import { Login } from './pages/login/login.component';

export const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'login',
    component: Login
  },
  { 
    path: '**',
    redirectTo: 'home' 
  }
];