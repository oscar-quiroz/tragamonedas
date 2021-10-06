import { Component, OnInit } from '@angular/core';
import { SlotMachineServiceService } from '../../slot-machine-service.service';
import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})
export class EstadisticasComponent implements OnInit {
  public starter = 'animate__fadeInLeft';
  public isData = false;
  public data: any = [];
  public load = false;
  public labels: string[] = [];
  public barData: number[] = [];

  public totalInvertido:number;
  public totalGanadoCasino:number;
  public totalGanadoJugadores:number;
  public porcentajeGanancia:number;

  public promedioT:number;
  public RondasT:number;

  public chartData: ChartDataSets[] = [
    { data: this.barData, label: 'Estadisticas', backgroundColor: '#0e8ad17c',hoverBackgroundColor: '#0e8ad1' },
  ];

  constructor(private simulationService: SlotMachineServiceService) {}

  ngOnInit(): void {}


  
  iniciar() {
   
if(!this.isData){
  
  this.load = true;
  this.starter = 'animate__fadeOutLeftBig';
  this.data = this.simulationService.getStats().subscribe((data: any) => {
    console.log(data);

    this.data = data;})

  setTimeout(() => {
    this.data.forEach((element) => {
      this.labels.push(element.name);
      this.barData.push(element.count);
      this.labels.splice(7, 11);
      this.barData.splice(7, 11);

  this.isData = true;
  this.load=false;
    });
    this.porcentajeGanancia= this.calcularPorcentaje();
    this.obtenerTiempo();
  }, 1000);
  
}

  }

  obtenerTiempo(){
    this.promedioT= this.data[7].count ;
  console.log("promedio de timepo: ", this.promedioT)
    this.RondasT= this.data[11].count;
    console.log("Rondas jugadas: ", this.RondasT)

  }


  calcularPorcentaje(){
    this.totalGanadoCasino= this.data[8].count;
  console.log("ganado casino: ", this.totalGanadoCasino)
    this.totalInvertido= this.data[10].count;
    console.log("invertido: ", this.totalInvertido)
    return ((this.totalGanadoCasino*100) / this.totalInvertido)

  }
}
