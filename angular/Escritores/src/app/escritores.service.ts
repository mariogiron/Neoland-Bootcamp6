import { Injectable } from '@angular/core';
import { ESCRITORES } from './db/escritores.db';
import { Escritor } from './models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  // getAll(): Promise<Escritor[]> {
  //   return Promise.resolve(ESCRITORES);
  // }

  getAll(): Promise<Escritor[]> {
    let prom = new Promise<Escritor[]>((resolve, reject) => {
      resolve(ESCRITORES);
    })
    return prom;
  }

  getAllMalamente(): Escritor[] {
    return ESCRITORES;
  }

  getById(pId): Escritor {
    return ESCRITORES.find((item) => {
      return item.id == pId
    })
  }

  getByIdP(pId): Promise<Escritor> {
    // Creo la promesa
    let prom = new Promise<Escritor>((resolve, reject) => {
      // Busco el escritor dentro del array a través de su id (pId)
      let escritorEncontrado = ESCRITORES.find(item => item.id == pId);

      if (escritorEncontrado) {
        // SI encuento el escritor resuelvo la promesa con el escritor
        resolve(escritorEncontrado);
      } else {
        // Si no lo encuentro la rechazo con un mensaje
        reject("No existe un usuario para ese ID");
      }
    })
    return prom
  }

}
