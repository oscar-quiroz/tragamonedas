import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SimulacionComponent } from './pages/simulacion/simulacion.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { MaquinaComponent } from './components/maquina/maquina.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SimulacionComponent,
    EstadisticasComponent,
    MaquinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
