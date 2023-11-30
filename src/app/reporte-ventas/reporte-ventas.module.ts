import { NgModule } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { ReporteVentasComponent } from './reporte-ventas.component';

@NgModule({
  declarations: [ReporteVentasComponent],
  imports: [CommonModule, NgForOf],
})
export class ReporteVentasModule {}
