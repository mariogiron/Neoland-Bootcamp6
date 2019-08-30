import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/estudiantes.service';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEstudiantesComponent implements OnInit {

  constructor(private estudiantesService: EstudiantesService) { }

  ngOnInit() {
    this.estudiantesService.getAll()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }

}
