import { Producto } from './models/producto.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrProdsComida: Producto[];
  arrProdsBebida: Producto[];

  arrProductosSeleccionados: Producto[];

  constructor() {
    this.arrProdsComida = [
      new Producto('Cocido Madrileño', 'http://.....', 3.59),
      //new Producto()
    ]

    this.arrProdsBebida = [
      new Producto('Fanta', 'http://.....', 1.50),
      //new Producto()
    ]

    this.arrProductosSeleccionados = [];
  }

  onProductoSeleccionado(nuevoProducto) {
    this.arrProductosSeleccionados.push(nuevoProducto);
    console.log(this.arrProductosSeleccionados);
  }

}
