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
  public data1000: any = [];
  public load = false;
  public labels: string[] = [];
  public barData: number[] = [];

  public barData1000: number[] = [];

  public totalInvertido: number;
  public totalGanadoCasino: number;
  public totalGanadoJugadores: number;
  public porcentajeGanancia: number;

  public totalInvertido1000: number;
  public totalGanadoCasino1000: number;
  public totalGanadoJugadores1000: number;
  public porcentajeGanancia1000: number;

  public promedioT: number;
  public RondasT: number;

  public promedioT1000: number;
  public RondasT1000: number;

  public chartData: ChartDataSets[] = [
    {
      data: this.barData,
      label: 'Estadisticas',
      backgroundColor: '#0e8ad17c',
      hoverBackgroundColor: '#0e8ad1',
    },
  ];

  public chartData1000: ChartDataSets[] = [
    {
      data: this.barData1000,
      label: 'Estadisticas',
      backgroundColor: '#9f4ac0a8',
      hoverBackgroundColor: '#9f4ac0',
    },
  ];

  constructor(private simulationService: SlotMachineServiceService) {}

  ngOnInit(): void {}

  iniciar() {
    if (!this.isData) {
      this.load = true;
      this.starter = 'animate__fadeOutLeftBig';
      this.data = this.simulationService.getStats().subscribe((data: any) => {
        console.log(data);
        this.data = data;
      });

      this.data1000 = this.simulationService
        .getStats1000()
        .subscribe((data1000: any) => {
          this.data1000 = data1000;
        });

      setTimeout(() => {
        //grafica 1
        this.data.forEach((element) => {
          //labels de las graficas
          this.labels.push(element.name);
          this.labels.splice(7, 11);

          //data de las grafica 1
          this.barData.push(element.count);
          this.barData.splice(7, 11);
        });

        //grafica 2
        this.data1000.forEach((element1000) => {
          //data de la grafica 2
          this.barData1000.push(element1000.count);
          this.barData1000.splice(7, 11);

          this.isData = true;
          this.load = false;
        });

        this.porcentajeGanancia = this.calcularPorcentaje();
        this.obtenerTiempo();
      }, 1000);
    }
  }

  obtenerTiempo() {
    this.promedioT = this.data[7].count;
    console.log('promedio de timepo: ', this.promedioT);
    this.RondasT = this.data[11].count;
    console.log('Rondas jugadas: ', this.RondasT);

    this.promedioT1000 = this.data1000[7].count;

    this.RondasT1000 = this.data1000[11].count;
  }

  calcularPorcentaje() {
    this.totalGanadoCasino = this.data[8].count;

    this.totalInvertido = this.data[10].count;

    return (this.totalGanadoCasino * 100) / this.totalInvertido;
  }

  calcularPorcentaje1000() {
    this.totalGanadoCasino1000 = this.data1000[8].count;

    this.totalInvertido1000 = this.data1000[10].count;

    return (this.totalGanadoCasino1000 * 100) / this.totalInvertido1000;
  }
}
