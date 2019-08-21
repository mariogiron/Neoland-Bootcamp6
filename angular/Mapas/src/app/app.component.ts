import { Component, ViewChild } from '@angular/core';

declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('googleMap', { static: false }) gMapElement: any;
  @ViewChild('inputPlaces', { static: false }) inputPlacesElement: any;
  map: any;

  directionsService: any;
  directionsDisplay: any;

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
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();

    let mapProps = {
      center: new google.maps.LatLng(currentCoords.latitude, currentCoords.longitude),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID // ROADMAP, SATELLITE, TERRAIN
    }
    this.map = new google.maps.Map(this.gMapElement.nativeElement, mapProps);

    this.directionsDisplay.setMap(this.map);

    let marker = new google.maps.Marker({
      position: mapProps.center,
      // position: new google.maps.LatLng(40.43400290, 4.131292130),
      title: 'Aquí estoy mamá!',
      animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(this.map);

    google.maps.event.addListener(this.map, 'click', (event) => {
      console.log(event);
      let markerClick = new google.maps.Marker({ position: event.latLng, animation: google.maps.Animation.DROP })
      markerClick.setMap(this.map);
    })

    // AUTOCOMPLETE
    let options = {
      types: ['address']
    }
    let autocomplete = new google.maps.places.Autocomplete(this.inputPlacesElement.nativeElement, options);
    // let autocomplete = new google.maps.places.Autocomplete(document.getElementById('iPlaces'));

    autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);
    console.log(this.map);

    let self = this;
    autocomplete.addListener('place_changed', function () {
      let place = autocomplete.getPlace();
      let lat = place.geometry.location.lat();
      let lng = place.geometry.location.lng();
      self.map.setCenter(place.geometry.location);

      let markerPlace = new google.maps.Marker({ position: place.geometry.location, animation: google.maps.Animation.DROP })
      markerPlace.setMap(self.map);
    })

  }

  // Método que calcula la ruta entre dos puntos cuando pulso un botón
  onClick() {
    let start = 'madrid, es';
    let end = 'valencia, es';

    // Creamos las opciones de la petición
    let opts = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.WALKING
    }

    // Lanzamos la petición
    let self = this;
    this.directionsService.route(opts, function (result, status) {
      console.log(result);
      self.directionsDisplay.setDirections(result);
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



