import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  resultado: string;

  constructor() {
    this.resultado = ""
  }

  pulsarBoton(item) {
    this.resultado += item;
  }

  resolver() {
    this.resultado = eval(this.resultado);
  }

  reset() {
    this.resultado = "";
  }

}
