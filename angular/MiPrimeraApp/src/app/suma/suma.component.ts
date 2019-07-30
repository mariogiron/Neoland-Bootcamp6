import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input() operando1: string;
  @Input() operando2: string;
  resultado: number;

  constructor() {
    this.resultado = 0;
  }

  ngOnInit() {
  }

  obtenerResultado() {
    this.resultado = parseInt(this.operando1) + parseInt(this.operando2);
  }

}
