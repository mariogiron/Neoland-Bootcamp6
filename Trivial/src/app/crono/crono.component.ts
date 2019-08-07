import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.css']
})
export class CronoComponent implements OnInit {

  @Input() estado: string;

  contador: number;
  intervalo;

  @Output() cronoTerminado: EventEmitter<boolean>;

  constructor() {
    this.contador = 30;
    this.cronoTerminado = new EventEmitter();
  }

  ngOnInit() {
    //this.lanzarContador();
  }

  lanzarContador() {
    this.contador = 10;
    this.intervalo = setInterval(() => {
      this.contador--;
      if (this.contador == 0) {
        clearInterval(this.intervalo);
        this.cronoTerminado.emit(true);
      }
    }, 1000);
  }

  ngOnChanges() {
    switch (this.estado) {
      case "start":
        this.lanzarContador();
        break;
      case "stop":
        clearInterval(this.intervalo);
        break
    }
  }

}
