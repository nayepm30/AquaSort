import { Routes } from '@angular/router';
import { Layout } from './layout/layout.component';
import { Home } from './pages/home/home.component';
import { Login } from './pages/login/login.component';
import { Registro } from './pages/registro/registro.component';
import { sobreNosotros } from './pages/sobreNosotros/sobreNosotros.component';
import { Producto } from './pages/producto/producto.component';
import { Contactanos } from './pages/contactanos/contactanos.component';
import { InicioUsuario } from './pages/inicioUsuario/inicioUsuario.component';

export const routes: Routes = [
  // 🔹 Rutas que SÍ usan el Layout
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'login', component: Login },
      { path: 'registro', component: Registro },
      { path: 'sobreNosotros', component: sobreNosotros },
      { path: 'producto', component: Producto },
      { path: 'contactanos', component: Contactanos }
    ]
  },

  // 🔹 Ruta que NO usa el Layout
  { path: 'inicioUsuario', component: InicioUsuario },

  // 🔹 Fallback
  { path: '**', redirectTo: 'home' }
];
