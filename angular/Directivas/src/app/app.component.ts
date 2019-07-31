import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  estilosParrafo: any;

  constructor() {
    this.estilosParrafo = {
      backgroundColor: 'red',
      fontSize: '24px'
    }
  }

  cambiarColor() {
    this.estilosParrafo.backgroundColor = 'green';
  }

  cambiaFuente($event) {
    console.log($event.target.value);
    this.estilosParrafo.fontSize = $event.target.value + "px";
  }

}