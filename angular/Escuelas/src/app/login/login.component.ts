import { UsuariosService } from './../usuarios.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuariosService: UsuariosService) {
    this.formulario = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.usuariosService.login(this.formulario.value)
      .then(response => {
        if (response['token']) {
          localStorage.setItem('user-token', response['token']);
        } else {
          alert(response['error'])
        }
      })
  }

}
