import { Routes } from '@angular/router';
import { Layout } from './layout/layout.component';
import { Home } from './pages/home/home.component';
import { Login } from './pages/login/login.component';
import { Registro } from './pages/registro/registro.component';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'home', component: Home},
      
      { path: 'login', component: Login },

      {path: 'registro', component: Registro},
      
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  // Ruta para páginas no encontradas, opcional
  { path: '**', redirectTo: 'home' }
];
