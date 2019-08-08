import { Libro } from './models/libro.model';
import { Injectable } from '@angular/core';
import { LIBROS } from './db/libros.db';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getByEscritorId(pIdEscritor): Promise<Libro[]> {
    return new Promise<Libro[]>((resolve, reject) => {
      let arrFiltrado = LIBROS.filter(item => item.escritor == pIdEscritor)
      resolve(arrFiltrado);
    })
  }

}