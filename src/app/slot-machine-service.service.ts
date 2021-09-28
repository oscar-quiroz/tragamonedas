import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlotMachineServiceService {

  constructor(protected http: HttpClient) {
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>("http://localhost:8080/api/casino/play");
  }

  play() {
    //MEtodo para llamar el back
    /*this.http.get<any>("http://localhost:8082/api/casino/play").subscribe((data: any) => {
            console.log(data);
        });
      }*/

      //Este Data es el archivo identico en json que llega al front
    let data = [
      {
        "name": "Game 0",
        "player": {
          "id": 0,
          "name": "Player 0",
          "startMoney": 1000000,
          "earnedMoney": 0,
          "lostMoney": 1000000,
          "finalMoney": 0,
          "timePlayed": 601,
          "winRounds": 254,
          "lostRounds": 347
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
          "earnedMoney": 0,
          "lostMoney": 1000000,
          "finalMoney": 0,
          "timePlayed": 579,
          "winRounds": 240,
          "lostRounds": 339
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
          "lostMoney": 568000,
          "finalMoney": 432000,
          "timePlayed": 720,
          "winRounds": 286,
          "lostRounds": 434
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
          "lostMoney": 71000,
          "finalMoney": 929000,
          "timePlayed": 720,
          "winRounds": 312,
          "lostRounds": 408
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
          "earnedMoney": 2653000,
          "lostMoney": 0,
          "finalMoney": 3653000,
          "timePlayed": 720,
          "winRounds": 293,
          "lostRounds": 427
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
          "earnedMoney": 0,
          "lostMoney": 1000000,
          "finalMoney": 0,
          "timePlayed": 375,
          "winRounds": 151,
          "lostRounds": 224
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
          "lostMoney": 1000000,
          "finalMoney": 0,
          "timePlayed": 540,
          "winRounds": 241,
          "lostRounds": 299
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
          "timePlayed": 438,
          "winRounds": 182,
          "lostRounds": 256
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
          "timePlayed": 407,
          "winRounds": 171,
          "lostRounds": 236
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
          "timePlayed": 635,
          "winRounds": 264,
          "lostRounds": 371
        },
        "machine": {
          "id": 9,
          "name": "SlotMachine 9"
        }
      }
    ];
  }
}
