import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  colorSeleccionado: string;
  mostrarSemaforo: boolean;

  constructor() {
    this.colorSeleccionado = 'verde';
    this.mostrarSemaforo = true;
  }

  ngOnInit() {
    setInterval(() => {
      this.cambiarSemaforo()
    }, 2000)
  }

  cambiarSemaforo() {
    if (this.colorSeleccionado == 'rojo') {
      this.colorSeleccionado = 'ambar';
    } else if (this.colorSeleccionado == 'ambar') {
      this.colorSeleccionado = 'verde';
    } else if (this.colorSeleccionado == 'verde') {
      this.colorSeleccionado = 'rojo';
    }
  }

  desapareceSemaforo() {
    this.mostrarSemaforo = !this.mostrarSemaforo;
  }

}
