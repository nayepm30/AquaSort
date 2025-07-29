import { Routes } from '@angular/router';
import { Layout } from './layout/layout.component';
import { Home } from './pages/home/home.component';
import { Login } from './pages/login/login.component';
import { Registro } from './pages/registro/registro.component';
import { sobreNosotros } from './pages/sobreNosotros/sobreNosotros.component';
import { Producto } from './pages/producto/producto.component';
import { Contactanos } from './pages/contactanos/contactanos.component';
import { InicioCliente } from './pages/inicioCliente/inicioCliente.component';
import { Carrito } from './pages/carrito/carrito.component';
import { InicioAdministrador } from './pages/inicioAdministrador/inicioAdministrador.component';
import { SolicitudesPendientes } from './pages/solicitudesPendientes/solicitudesPendientes.component';
import { LayoutAdministrador } from './layoutAdministrador/layoutAdministrador.component';
import { SolicitudesHistorial } from './pages/solicitudesHistorial/solicitudesHistorial.component';

export const routes: Routes = [
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

  {
    path: '',
    component: LayoutAdministrador,
    children: [
      { path: 'inicioAdministrador', component: InicioAdministrador },
      { path: 'solicitudesPendientes', component: SolicitudesPendientes },
      { path: 'solicitudesHistorial', component: SolicitudesHistorial }
    ]
  },

  { path: 'inicioCliente', component: InicioCliente },
  { path: 'carrito', component: Carrito },
  { path: '**', redirectTo: 'home' }
];
