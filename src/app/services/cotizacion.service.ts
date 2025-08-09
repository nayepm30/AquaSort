import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  private apiUrl = 'http://localhost:3000/api/cotizaciones'; // Cambia a tu URL real

  constructor(private http: HttpClient) { }

  getCotizacionesPendientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pendientes`);
  }
}
