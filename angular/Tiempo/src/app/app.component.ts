import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mensajes: string[]

  constructor() {
    this.mensajes = [];
  }

  onAvisa30Segundos($event) {
    this.mensajes.push(`Al reloj con identificador ${$event} le faltan 30 segundos`);
  }

  onAvisaTermina($event) {
    this.mensajes.push(`El reloj con identificador ${$event} ha terminado`);
  }

}
