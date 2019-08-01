import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  departamento: string;

  constructor() {
    this.departamento = 'ux/uo';
  }

  ngOnInit() {
  }

  cambiarDepartamento(pDepartamento: string) {
    this.departamento = pDepartamento;
  }

}