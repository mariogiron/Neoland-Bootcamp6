import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;

  constructor(private registroService: RegistroService) {
    this.formulario = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      mail: new FormControl(''),
      address: new FormControl(''),
      age: new FormControl(''),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.registroService.registro(this.formulario.value)
      .then(response => {
        console.log(response);
      })
  }

}
