import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
      ]),
      apellidos: new FormControl(''),
      email: new FormControl(''),
      dni: new FormControl(''),
      edad: new FormControl(''),
      password: new FormControl(''),
      password_repeat: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

}
