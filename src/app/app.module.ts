import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { DashboardModule } from './dashboard/dashboard.module';
import { ReporteVentasModule } from "./reporte-ventas/reporte-ventas.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    ReporteVentasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
