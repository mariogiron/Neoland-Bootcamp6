import { EstudiantesService } from 'src/app/estudiantes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-estudiantes',
  templateUrl: './formulario-estudiantes.component.html',
  styleUrls: ['./formulario-estudiantes.component.css']
})
export class FormularioEstudiantesComponent implements OnInit {

  formNewAlumno: FormGroup;

  constructor(private estudiantesService: EstudiantesService, private router: Router) {
    this.formNewAlumno = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      email: new FormControl(''),
      edad: new FormControl(''),
      matricula: new FormControl(''),
      nota_media: new FormControl(''),
      sexo: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formNewAlumno.value);
    this.estudiantesService.create(this.formNewAlumno.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/main', 'students']);
      })
      .catch(err => {

      })
  }

}
