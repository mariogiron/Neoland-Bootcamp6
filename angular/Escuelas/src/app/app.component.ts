import { UsuariosService } from './usuarios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public usuariosService: UsuariosService) {

  }

  onLogout() {
    localStorage.removeItem('user-token');
  }

}
