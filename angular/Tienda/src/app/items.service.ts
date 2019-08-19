import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  createCart() {
    return this.http.post(`${this.baseUrl}/newcart`, {}).toPromise()
  }

  insertProduct(pProductId) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Cart-Token': localStorage.getItem('token')
      })
    }
    return this.http.post(`${this.baseUrl}/new`, { item_id: pProductId }, httpOptions).toPromise()
  }

  getCart() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Cart-Token': localStorage.getItem('token')
      })
    }
    return this.http.get(`${this.baseUrl}/cart`, httpOptions).toPromise();
  }

}
