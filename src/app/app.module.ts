import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SimulacionComponent } from './pages/simulacion/simulacion.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { MaquinaComponent } from './components/maquina/maquina.component';
import { HttpClientModule } from '@angular/common/http';
import { GraficoBarrasComponent } from './components/grafico-barras/grafico-barras.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SimulacionComponent,
    EstadisticasComponent,
    MaquinaComponent,
    GraficoBarrasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
