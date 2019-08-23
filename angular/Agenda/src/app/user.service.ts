import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://reqres.in/api/users';
  }

  getUser(pPage) {
    return this.http.get(`${this.baseUrl}?page=${pPage}`).toPromise();
  }

  getUserById(pId) {
    return this.http.get(`${this.baseUrl}/${pId}`).toPromise();
  }
}
