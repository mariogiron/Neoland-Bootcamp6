import { Injectable } from '@angular/core';
import { PERSONAS } from './db/personas.db';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor() { }

  getAll(): any[] {
    return PERSONAS;
  }

  getAllP(): Promise<any[]> {
    let prom = new Promise<any[]>((resolve, reject) => {
      setTimeout(() => { resolve(PERSONAS) }, 5000)
    });
    return prom;
  }

  getMayoresEdad(): any[] {
    let personasMayores = new Array();
    for (let persona of PERSONAS) {
      if (persona.edad >= 18) {
        personasMayores.push(persona);
      }
    }
    return personasMayores;
    // return PERSONAS.filter(persona => persona.edad >= 18)
  }

  getNombres(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      resolve(PERSONAS.map(personas => personas.nombre));
    })
  }

}
