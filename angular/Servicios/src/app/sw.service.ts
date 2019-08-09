import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://swapi.co/api/planets/?format=json';
  }

  getPlanets() {
    return this.http.get(this.baseUrl);
  }

  getPlanetsP() {
    return this.http.get(this.baseUrl).toPromise();
  }

}
