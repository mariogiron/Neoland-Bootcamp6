import { UsuariosService } from './../usuarios.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup

  constructor(private usuariosService: UsuariosService) {
    this.formulario = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.usuariosService.registrar(this.formulario.value)
      .then(response => {
        if (response['token']) {
          localStorage.setItem('user-token', response['token']);
        } else {
          alert('Error en el registro. Inténtalo más tarde.');
        }
      })
      .catch(err => {
        alert('Error en el registro. Inténtalo más tarde.');
      });
  }

}