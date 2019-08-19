import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://neolandshop.ngrok.io/items';
  }

  getAll() {
    return this.http.get(this.baseUrl).toPromise();
  }

  getByCategory(cat) {
    return this.http.get(`${this.baseUrl}/${cat}`).toPromise();
  }

}
