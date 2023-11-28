import { Component, OnInit } from '@angular/core';
import { ReporteVentasService } from './reporte-ventas.service';

@Component({
  selector: 'app-reporte-ventas',
  templateUrl: './reporte-ventas.component.html',
  styleUrls: ['./reporte-ventas.component.css'],
})

export class ReporteVentasComponent implements OnInit {
  reporteVentas: any[] = [];

  constructor(private reporteVentasService: ReporteVentasService) {}

  ngOnInit(): void {
    this.obtenerReporteVentas();
  }

  obtenerReporteVentas() {
    this.reporteVentasService.getReporteVentas().subscribe((data) => {
      this.reporteVentas = data;
    });
  }
}
