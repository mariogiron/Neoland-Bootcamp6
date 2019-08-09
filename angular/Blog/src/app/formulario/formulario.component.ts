import { Post } from './../models/post.model';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private postsService: PostsService) {
    this.formulario = new FormGroup({
      titulo: new FormControl(''),
      texto: new FormControl(''),
      autor: new FormControl(''),
      imagen: new FormControl(''),
      fecha: new FormControl(''),
      categoria: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    let values = this.formulario.value;
    let p = new Post(values.titulo, values.texto, values.autor, values.imagen, values.categoria);
    this.postsService.agregarPost(p);
  }

}
