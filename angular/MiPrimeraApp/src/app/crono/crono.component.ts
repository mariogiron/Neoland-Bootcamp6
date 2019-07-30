import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.css']
})
export class CronoComponent implements OnInit {

  @Input() inicio: string;
  @Output() cuentaTerminada: EventEmitter<string>

  contador: number;

  constructor() {
    this.contador = 10;
    this.cuentaTerminada = new EventEmitter()
    console.log('Constructor INPUT', this.inicio)
  }

  ngOnInit() {
    console.log('NgOnInit INPUT', this.inicio)
    this.contador = parseInt(this.inicio);
  }

  arrancarContador() {
    let interval = setInterval(() => {
      this.contador--;
      if (this.contador === 0) {
        clearInterval(interval);
        this.cuentaTerminada.emit(`Ha terminado el crono cuyo inicio era ${this.inicio}`);
      }
    }, 1000);
  }

  reset() {
    this.contador = parseInt(this.inicio);
  }

}