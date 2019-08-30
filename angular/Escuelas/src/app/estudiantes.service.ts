import { Alumno } from './models/alumno.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/estudiantes';
  }

  getAll(): Promise<Alumno[]> {
    return this.http.get<Alumno[]>(this.baseUrl).toPromise();
  }

}
