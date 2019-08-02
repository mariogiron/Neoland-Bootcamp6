import { Producto } from './../models/producto.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: Producto[];

  // 1- Defino el OUTPUT
  @Output() productoSeleccionado: EventEmitter<Producto>

  constructor() {
    // 2 - Inicializo el OUTPUT
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  pulsaProducto(pProducto) {
    // 3 - Utilizo el OUTPUT a través del EMIT
    this.productoSeleccionado.emit(pProducto);
  }

}
