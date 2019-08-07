import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

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
        Validators.maxLength(15)
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.pattern(/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/)
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      edad: new FormControl('', [
        this.edadValidator
      ]),
      password: new FormControl('', [
        Validators.pattern(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/)
      ]),
      password_repeat: new FormControl('')
    }, [
        this.equalPasswordValidator
      ]);
  }

  ngOnInit() {
    let controlEmail = this.formulario.controls['email']
    controlEmail.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      console.log(value);
    })
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  edadValidator(control) {
    let edadValue = control.value;
    let edadMinima = 18;
    let edadMaxima = 65;

    if (edadValue >= edadMinima && edadValue <= edadMaxima) {
      // Correcto
      return null;
    } else {
      // Incorrecto
      return { edadvalidator: { edadminima: edadMinima, edadmaxima: edadMaxima } };
    }
  }

  dniValidator(control) {

    let dni = control.value
    var numero
    var letr
    var letra

    let expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) == true) {
      numero = dni.substr(0, dni.length - 1);
      letr = dni.substr(dni.length - 1, 1);
      numero = numero % 23;
      letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
      letra = letra.substring(numero, numero + 1);
      if (letra != letr.toUpperCase()) {
        return { dnivalidator: 'La letra del dni no corresponde' }
      } else {
        return null
      }
    } else {
      return { dnivalidator: 'Formato incorrecto' }
    }
  }

  equalPasswordValidator(form) {
    let passwordValue = form.controls['password'].value;
    let passwordRepeatValue = form.controls['password_repeat'].value;

    console.log(passwordValue, passwordRepeatValue);

    return null;
  }

}