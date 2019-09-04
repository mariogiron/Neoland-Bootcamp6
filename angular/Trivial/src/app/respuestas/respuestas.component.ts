import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

  @Input() respuestas: string[]
  @Output() respuestaSeleccionada: EventEmitter<number>

  constructor() {
    // Inicializo el Output, porque si no no funciona
    this.respuestaSeleccionada = new EventEmitter();
  }

  ngOnInit() {
  }

  onRespuestaPulsada(indice) {
    this.respuestaSeleccionada.emit(indice);
  }

}
