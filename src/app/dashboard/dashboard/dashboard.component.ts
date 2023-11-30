import { Component, OnInit } from '@angular/core';
import { ReporteVentasService } from 'src/app/reporte-ventas/reporte-ventas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
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

  getTotalSales(): number {
    return this.reporteVentas.reduce(
      (total, game) => total + game.sold * game.price,
      0
    );
  }

  getSales(): number {
    return this.reporteVentas.reduce((total, game) => total + game.sold, 0);
  }

  totalGamesSold: number = this.getSales();
  totalRevenue: number = this.getTotalSales();
  topSellingGenre: String = 'RPG';
}
