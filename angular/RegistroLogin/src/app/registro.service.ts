import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://registrate.ngrok.io';
  }

  obtenerPremio(pToken) {
    const httpOptions = {
      headers: new HttpHeaders({
        'User-Token': pToken
      })
    }
    return this.http.get(`${this.baseUrl}/premio`, httpOptions).toPromise();
  }

  registro(values) {
    return this.http.post(`${this.baseUrl}/register`, values).toPromise();
  }

  login(values) {
    return this.http.post(`${this.baseUrl}/login`, values).toPromise();
  }

  envioPost(values, tipo) {
    return this.http.post(`${this.baseUrl}/${tipo}`, values).toPromise();
  }

}

// this.registroService.envioPost({}, 'login');
// this.registroService.envioPost({}, 'register');
