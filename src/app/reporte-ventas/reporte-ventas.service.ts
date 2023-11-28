import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReporteVentasService {
  private apiUrl = 'https://65359710c620ba9358ec9353.mockapi.io';

  constructor(private http: HttpClient) {}

  getReporteVentas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/games`);
  }
}
