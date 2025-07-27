import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productos: any[] = [];

  constructor(private http: HttpClient) { }

  obtenerProductos(): any[] {
    return this.productos;
  }

  agregarProducto(producto: any): void {
    const existente = this.productos.find(p => p.id === producto.id);
    if (existente) {
      existente.cantidad += 1;
    } else {
      this.productos.push({...producto, cantidad: 1});
    }
  }

  actualizarProducto(producto: any): void {
    const index = this.productos.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.productos[index] = producto;
    }
  }

  eliminarProducto(id: string): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }

  vaciarCarrito(): void {
    this.productos = [];
  }

  confirmarPedido(pedido: any): any {
    // Aquí iría la llamada HTTP real a tu backend
    return this.http.post('/api/pedidos', pedido);
    
    // Para pruebas puedes usar:
    // return of({ success: true }).pipe(delay(1000));
  }
}