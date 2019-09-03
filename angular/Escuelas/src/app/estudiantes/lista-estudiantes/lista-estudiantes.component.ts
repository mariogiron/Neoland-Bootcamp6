import { Alumno } from './../../models/alumno.model';
import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from 'src/app/estudiantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEstudiantesComponent implements OnInit {

  arrAlumnos: Alumno[]

  constructor(private estudiantesService: EstudiantesService, private router: Router) { }

  ngOnInit() {
    this.estudiantesService.getAll()
      .then((response) => {
        if (response['error']) {
          alert(response['error']);
          localStorage.removeItem('user-token');
          this.router.navigate(['/login']);
        } else {
          this.arrAlumnos = response;
        }
      })
      .catch((err) => {
        // localStorage.removeItem('user-token');
        // this.router.navigate(['/login']);
      })
  }

}
