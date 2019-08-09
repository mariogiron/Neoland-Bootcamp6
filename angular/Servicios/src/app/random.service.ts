import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://random.ngrok.io/random/num';
  }

  getRandomNum() {
    this.http.post(this.baseUrl, { max: 8, min: 4 }).subscribe(response => {
      console.log(response)
    })
  }

}
