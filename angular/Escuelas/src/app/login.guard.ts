import { UsuariosService } from './usuarios.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private usuariosService: UsuariosService) { }

  canActivate() {
    return this.usuariosService.isUserLogged();
  }

}
