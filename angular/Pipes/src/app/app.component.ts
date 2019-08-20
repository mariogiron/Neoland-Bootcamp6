import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  precio: number;
  fechaActual: Date;
  numero: number;
  cadena: string;
  randomNum: number;

  cadena5Segundos: Promise<string>

  constructor() {
    this.precio = 4999.99;
    this.fechaActual = new Date();
    this.numero = 3489.125789;
    this.cadena = 'HoLa MUndO Qué tal';
    this.randomNum = Math.random();

    this.cadena5Segundos = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Ha terminado la promesa'), 5000);
    })
  }

}
