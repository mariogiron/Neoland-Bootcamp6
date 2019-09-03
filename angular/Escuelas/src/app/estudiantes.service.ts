import { Alumno } from './models/alumno.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/estudiantes';
  }

  getAll(): Promise<Alumno[]> {
    let httOptions = this.getHeaders();
    return this.http.get<Alumno[]>(this.baseUrl, httOptions).toPromise();
  }

  create(values): Promise<any> {
    let httOptions = this.getHeaders();
    return this.http.post<any>(this.baseUrl, values, httOptions).toPromise();
  }

  getHeaders() {
    return {
      headers: new HttpHeaders({
        'Authentication': localStorage.getItem('user-token')
      })
    }
  }

}
