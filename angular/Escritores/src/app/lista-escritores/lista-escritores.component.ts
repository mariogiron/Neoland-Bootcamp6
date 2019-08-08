import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  arrEscritores: Escritor[]

  // Inyecto el servicio de escritores para poder usarlo dentro del componente
  constructor(private escritoresService: EscritoresService) { }

  ngOnInit() {
    // Utilizo el servicio de escritores, llamando al método getAll que me devuelve todos los escritores.
    this.escritoresService.getAll()
      .then(arr => {
        // Asigno el array que me devuelve el servicio al array que utilizaré en la plantilla
        this.arrEscritores = arr;
      })

    //this.arrEscritores = this.escritoresService.getAllMalamente()
  }

}
