import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'reloj-simple',
  templateUrl: './reloj-simple.component.html',
  styleUrls: ['./reloj-simple.component.css']
})
export class RelojSimpleComponent implements OnInit {

  @Input() identificador: string;
  @Input() segundos: string;

  // Declaro los output de mi componente
  @Output() avisa30Segundos: EventEmitter<any>;
  @Output() avisaTermina: EventEmitter<any>;

  contador: number;

  constructor() {
    // Inicializo los Output de mi componente
    this.avisa30Segundos = new EventEmitter();
    this.avisaTermina = new EventEmitter();
  }

  ngOnInit() {
    console.log(this.identificador, this.segundos);
    // Transformo el INPUT segundos, que es un string en un número
    this.contador = parseInt(this.segundos);
    // Lanzo el intervalo sobre ese número
    let interval = setInterval(() => {
      this.contador--;
      if (this.contador == 30) {
        this.avisa30Segundos.emit(this.identificador);
      }
      if (this.contador == 0) {
        this.avisaTermina.emit(this.identificador);
        clearInterval(interval);
      }
    }, 1000)
  }

  mostrarTiempo() {
    let horas = Math.floor(this.contador / (60 * 60));
    let segundosRestantes = this.contador % (60 * 60);
    let minutos = Math.floor(segundosRestantes / 60);
    let segundos = segundosRestantes % 60;
    // return `${horas}:${minutos}.${segundos}`;
    return this.tiempoChachi(horas, minutos, segundos);
  }

  tiempoChachi(pHoras: number, pMinutos: number, pSegundos: number) {
    let horasString = (pHoras < 10) ? `0${pHoras}` : `${pHoras}`;
    let minutosString = (pMinutos < 10) ? `0${pMinutos}` : `${pMinutos}`;
    let segundosString = (pSegundos < 10) ? `0${pSegundos}` : `${pSegundos}`;
    return `${horasString}:${minutosString}.${segundosString}`;
  }

}
