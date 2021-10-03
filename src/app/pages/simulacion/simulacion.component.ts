import { Component, OnInit } from '@angular/core';

import { SlotMachineServiceService } from '../../slot-machine-service.service';

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrls: ['./simulacion.component.css']
})
export class SimulacionComponent implements OnInit {

  constructor(private simulationService:SlotMachineServiceService) { }

  public data:any=[];

  public starter= 'animate__fadeInLeft';

  public isData=false;

  public load =false;

  ngOnInit(): void {
    
  }

  iniciar(){
    this.load=true;
    this.starter='animate__fadeOutLeftBig';

    /*this.data = [
      {
          "name": "Game 0",
          "player": {
              "id": 0,
              "name": "Player 0",
              "startMoney": 1000000,
              "earnedMoney": 0,
              "lostMoney": 1000000,
              "finalMoney": 0,
              "timePlayed": 482,
              "winRounds": 190,
              "lostRounds": 292
          },
          "machine": {
              "id": 0,
              "name": "SlotMachine 0"
          }
      },
      {
          "name": "Game 1",
          "player": {
              "id": 1,
              "name": "Player 1",
              "startMoney": 1000000,
              "earnedMoney": 3144000,
              "lostMoney": 0,
              "finalMoney": 4144000,
              "timePlayed": 720,
              "winRounds": 304,
              "lostRounds": 416
          },
          "machine": {
              "id": 1,
              "name": "SlotMachine 1"
          }
      },
      {
          "name": "Game 2",
          "player": {
              "id": 2,
              "name": "Player 2",
              "startMoney": 1000000,
              "earnedMoney": 0,
              "lostMoney": 1000000,
              "finalMoney": 0,
              "timePlayed": 541,
              "winRounds": 215,
              "lostRounds": 326
          },
          "machine": {
              "id": 2,
              "name": "SlotMachine 2"
          }
      },
      {
          "name": "Game 3",
          "player": {
              "id": 3,
              "name": "Player 3",
              "startMoney": 1000000,
              "earnedMoney": 0,
              "lostMoney": 1000000,
              "finalMoney": 0,
              "timePlayed": 630,
              "winRounds": 280,
              "lostRounds": 350
          },
          "machine": {
              "id": 3,
              "name": "SlotMachine 3"
          }
      },
      {
          "name": "Game 4",
          "player": {
              "id": 4,
              "name": "Player 4",
              "startMoney": 1000000,
              "earnedMoney": 0,
              "lostMoney": 1000000,
              "finalMoney": 0,
              "timePlayed": 375,
              "winRounds": 161,
              "lostRounds": 214
          },
          "machine": {
              "id": 4,
              "name": "SlotMachine 4"
          }
      },
      {
          "name": "Game 5",
          "player": {
              "id": 5,
              "name": "Player 5",
              "startMoney": 1000000,
              "earnedMoney": 998000,
              "lostMoney": 0,
              "finalMoney": 1998000,
              "timePlayed": 720,
              "winRounds": 284,
              "lostRounds": 436
          },
          "machine": {
              "id": 5,
              "name": "SlotMachine 5"
          }
      },
      {
          "name": "Game 6",
          "player": {
              "id": 6,
              "name": "Player 6",
              "startMoney": 1000000,
              "earnedMoney": 0,
              "lostMoney": 961000,
              "finalMoney": 39000,
              "timePlayed": 720,
              "winRounds": 288,
              "lostRounds": 432
          },
          "machine": {
              "id": 6,
              "name": "SlotMachine 6"
          }
      },
      {
          "name": "Game 7",
          "player": {
              "id": 7,
              "name": "Player 7",
              "startMoney": 1000000,
              "earnedMoney": 0,
              "lostMoney": 1000000,
              "finalMoney": 0,
              "timePlayed": 413,
              "winRounds": 165,
              "lostRounds": 248
          },
          "machine": {
              "id": 7,
              "name": "SlotMachine 7"
          }
      },
      {
          "name": "Game 8",
          "player": {
              "id": 8,
              "name": "Player 8",
              "startMoney": 1000000,
              "earnedMoney": 0,
              "lostMoney": 1000000,
              "finalMoney": 0,
              "timePlayed": 452,
              "winRounds": 186,
              "lostRounds": 266
          },
          "machine": {
              "id": 8,
              "name": "SlotMachine 8"
          }
      },
      {
          "name": "Game 9",
          "player": {
              "id": 9,
              "name": "Player 9",
              "startMoney": 1000000,
              "earnedMoney": 0,
              "lostMoney": 1000000,
              "finalMoney": 0,
              "timePlayed": 538,
              "winRounds": 224,
              "lostRounds": 314
          },
          "machine": {
              "id": 9,
              "name": "SlotMachine 9"
          }
      }
  ];*/
    
    setTimeout(() => {
      this.simulationService.play().subscribe((data: any) => {
        console.log(data);

        this.data = data;})
    }, 1000)

    setTimeout(() => {
      if(this.data.length > 0 ){
        this.isData=true;
        this.load=false;
      }
    }, 4000);
   
  }

}
