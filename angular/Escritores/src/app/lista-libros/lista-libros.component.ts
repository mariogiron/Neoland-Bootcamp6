import { Libro } from './../models/libro.model';
import { LibrosService } from './../libros.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  arrLibros: Libro[]

  constructor(private activatedRoute: ActivatedRoute, private librosService: LibrosService) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(params => {
      console.log(params.idEscritor)
      this.librosService.getByEscritorId(params.idEscritor)
        .then((libros) => {
          this.arrLibros = libros;
        })
    })
  }

}