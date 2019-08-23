import { UserService } from './../user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  @Output() contactoSeleccionado: EventEmitter<any>

  currentPage: number;
  numPages: number;
  contactos: any[];

  constructor(private userService: UserService) {
    this.currentPage = 1;
    this.numPages = 0;
    this.contactoSeleccionado = new EventEmitter();
  }

  ngOnInit() {
    this.userService.getUser(this.currentPage)
      .then(response => {
        this.contactos = response['data'];
        this.numPages = response['total_pages'];
      })
  }

  createArray() {
    return Array(this.numPages).fill(0)
  }

  onClickPage(pIndice) {
    this.userService.getUser(pIndice)
      .then(response => {
        this.contactos = response['data'];
      })
  }

  onContactoClick(pContacto) {
    console.log(pContacto);
    this.contactoSeleccionado.emit(pContacto);
    // this.userService.getUserById(pContacto.id)
    //   .then(response => {
    //     console.log(response);
    //   });
  }

}
