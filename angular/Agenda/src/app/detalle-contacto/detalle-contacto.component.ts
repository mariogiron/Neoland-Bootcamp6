import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.component.html',
  styleUrls: ['./detalle-contacto.component.css']
})
export class DetalleContactoComponent implements OnInit {

  @Input() contacto: any;

  constructor() { }

  ngOnInit() {
  }

}
