import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  valorTexto: string;
  persona: any;

  constructor() {
    this.valorTexto = 'Valor inicial del campo de texto';
    this.persona = {};
  }

  ngOnInit() {
  }

  pulsaBoton() {
    alert(this.valorTexto);
  }

  enviarFormulario() {
    console.log(this.persona);
  }

}