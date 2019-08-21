import { Component, ViewChild } from '@angular/core';

declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('googleMap', { static: true }) gMapElement: any;
  map: any;

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.loadMap(position.coords);
      }, this.showError);
    } else {
      console.log('La he liao parda');
    }
  }

  loadMap(currentCoords) {
    let mapProps = {
      center: new google.maps.LatLng(currentCoords.latitude, currentCoords.longitude),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID // ROADMAP, SATELLITE, TERRAIN
    }
    this.map = new google.maps.Map(this.gMapElement.nativeElement, mapProps);

    let marker = new google.maps.Marker({
      position: mapProps.center,
      title: 'Aquí estoy mamá!',
      animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(this.map);

    google.maps.event.addListener(this.map, 'click', (event) => {
      console.log(event);
      let markerClick = new google.maps.Marker({ position: event.latLng, animation: google.maps.Animation.DROP })
      markerClick.setMap(this.map);
    })
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



