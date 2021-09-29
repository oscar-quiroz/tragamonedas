import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.css'],
})
export class MaquinaComponent implements OnInit {
  
  @Input() machineInfo:any = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.machineInfo)
  }
}
