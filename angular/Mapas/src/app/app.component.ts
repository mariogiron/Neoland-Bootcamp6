import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
      }, this.showError);
    } else {
      console.log('La he liao parda');
    }
  }

  showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED: {
        console.log('El usuario no permite localizarle');
        break;
      }
      case error.POSITION_UNAVAILABLE: {
        console.log('La posición no está disponible');
        break;
      }
      case error.TIMEOUT: {
        console.log('Se ha terminado el tiempo de espera');
        break;
      }
      case error.UNKNOWN_ERROR: {
        console.log('Ka pachao?');
        break;
      }
    }
  }

}
