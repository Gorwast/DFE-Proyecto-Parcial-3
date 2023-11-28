import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ReporteVentasComponent } from './reporte-ventas/reporte-ventas.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reporte-ventas', component: ReporteVentasComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
