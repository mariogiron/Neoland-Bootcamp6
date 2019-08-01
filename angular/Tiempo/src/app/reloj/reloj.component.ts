import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  @Input() identificador: string;
  @Input() segundos: string;

  tmpSegundos: number;
  interval: any;

  constructor() { }

  ngOnInit() {
    this.tmpSegundos = parseInt(this.segundos);
    this.interval = setInterval(() => {
      this.tmpSegundos--
    }, 1000);
  }

  mostrarTiempo() {
    let horas = Math.floor(this.tmpSegundos / (60 * 60));
    let segundosRestantes = this.tmpSegundos % (60 * 60);
    let minutos = Math.floor(segundosRestantes / 60);
    let segundos = segundosRestantes % 60;
    return `${horas}:${minutos}.${segundos}`;
    // return `${(horas < 10) ? `0${horas}`}`
  }

}
