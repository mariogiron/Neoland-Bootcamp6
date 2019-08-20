import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private registroService: RegistroService) { }

  ngOnInit() {
  }

  onSubmit(values) {
    this.registroService.login(values)
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response['token']);
      })
  }

}
