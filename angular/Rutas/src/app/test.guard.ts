import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    let num = Math.random() * 100
    console.log(num);
    if (num > 50) {
      return true
    } else {
      this.router.navigate(['error']);
      return false;
    }
  }

}
