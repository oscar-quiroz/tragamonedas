import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SlotMachineServiceService} from '../../slot-machine-service.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router:Router, private service:SlotMachineServiceService) { }

  ngOnInit(): void {
  }

  navegar(){
    this.router.navigateByUrl('/Simulacion');
    this.service.play();
  }

}
