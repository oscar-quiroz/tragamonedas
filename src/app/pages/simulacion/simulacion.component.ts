import { Component, OnInit } from '@angular/core';

import { SlotMachineServiceService } from '../../slot-machine-service.service';

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrls: ['./simulacion.component.css']
})
export class SimulacionComponent implements OnInit {

  constructor(private simulationService:SlotMachineServiceService) { }

  public data=[];

  public starter= 'animate__fadeInLeft animate__delay-0.5s';

  public isData=false;

  public load =false;

  ngOnInit(): void {
    
  }

  iniciar(){
    this.load=true;
    this.starter='animate__fadeOutLeftBig animate__delay-0.5s'
    setTimeout(() => {
      this.data = this.simulationService.play();
    
      if(this.data.length > 0 ){
        this.isData=true;
        this.load=false;
      }
      
    }, 1000);
   
  }

}
