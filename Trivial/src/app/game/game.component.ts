import { Pregunta } from './../models/pregunta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  preguntas: Pregunta[]
  preguntaActual: number;
  mensaje: string;
  aciertos: boolean[]
  estadoCrono: string;

  constructor() {
    this.estadoCrono = "start"; // stop, start
    this.preguntaActual = 0;
    this.mensaje = '';
    this.aciertos = [];
    this.preguntas = [
      new Pregunta('¿Cómo se llama el torpedo sesuarl de presidente del Gobierno de España por la gloria de tu madre?', ['Mari Fistro Rajoy', 'Torpedo sesuar de Pedro Sánche', 'El Coleta del Oeste', 'Perry Manson'], 1),
      new Pregunta('¿Cuánto caballo vienen de Bonansa?', ['Petecan', 'Sieter. Ni uno más', 'Ninguno porque se han muerto de sé', 'Uno y cojo'], 1),
      new Pregunta('¿En qué película sesuarl fui protagonista humano?', ['Rambo en mitá de Cuenca', 'El fistro de viejo que llega a Madrí', 'Duodeno roto', 'El Condemor'], 3)
    ]
  }

  ngOnInit() {
  }

  onRespuestaSeleccionada($event) {
    this.estadoCrono = 'stop';
    if (this.preguntas[this.preguntaActual].respuestaCorrecta == $event) {
      this.mensaje = 'RESPUESTA CORRECTA';
      this.aciertos.push(true);
    } else {
      this.mensaje = 'RESPUESTA INCORRECTA';
      this.aciertos.push(false);
    }
    setTimeout(() => {
      this.cambiaPregunta();
    }, 1000)
  }

  onCronoTerminado($event) {
    console.log('TERMINA CRONO');
    this.cambiaPregunta();
  }

  cambiaPregunta() {
    this.estadoCrono = "start";
    this.mensaje = '';
    if (this.preguntaActual == this.preguntas.length - 1) {
      this.mensaje = 'JUEGO TERMINADO!!'
      console.log(this.aciertos);
    } else {
      this.preguntaActual++;
    }
  }

}
