import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SimulacionComponent } from './pages/simulacion/simulacion.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';

const routes: Routes = [
  {
    path:'', component: InicioComponent
  },
  {
    path:'Simulacion', component: SimulacionComponent
  },
  {
    path:'Estadisticas', component: EstadisticasComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
