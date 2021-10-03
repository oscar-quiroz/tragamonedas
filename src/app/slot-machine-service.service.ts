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
   /* this.http.get<any>("http://localhost:8082/api/casino/play").subscribe((data: any) => {
            console.log(data);

            return data;
        });
      }*/ 
      
  return this.http.get<any>("http://localhost:8082/api/casino/play");
      }

  getStats(){
    //return this.http.get<any>("http://localhost:8082/api/casino/stats");
    return [
      {
          "name": "3 BAR",
          "count": 0
      },
      {
          "name": "3 Seven",
          "count": 3
      },
      {
          "name": "3 Cherries",
          "count": 15
      },
      {
          "name": "3 de cualquier simbolo",
          "count": 257
      },
      {
          "name": "Cualquiera y 2 Cherries",
          "count": 262
      },
      {
          "name": "2 Cualquiera y 1 Cherrie",
          "count": 1760
      },
      {
          "name": "3 diferentes",
          "count": 3294
      },
      {
          "name": "Promedio tiempo de juego",
          "count": 559
      },
      {
          "name": "Dinero ganado por el casino",
          "count": 3819000
      },
      {
          "name": "Dinero ganado por los jugadores",
          "count": 6181000
      },
      {
          "name": "Dinero total invertido por los jugadores",
          "count": 10000000
      },
      {
          "name": "Total rondas jugadas",
          "count": 5591
      }
  ]
  }
}
