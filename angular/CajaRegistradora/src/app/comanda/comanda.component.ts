import { Producto } from './../models/producto.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() productosPedidos: Producto[]

  constructor() { }

  ngOnInit() {
  }

  precioTotal() {
    let total = 0;
    for (let prod of this.productosPedidos) {
      total += prod.precio
    }
    return total;
  }

}
