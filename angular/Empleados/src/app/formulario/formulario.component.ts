import { Empleado } from '../models/empleado.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  empleadoFormulario: Empleado;

  @Output() envioEmpleado: EventEmitter<Empleado>

  constructor() {
    this.empleadoFormulario = new Empleado();
    this.envioEmpleado = new EventEmitter();
  }

  ngOnInit() {
  }

  enviarFormulario() {
    console.log(this.empleadoFormulario);
    this.envioEmpleado.emit(this.empleadoFormulario);
  }

}
