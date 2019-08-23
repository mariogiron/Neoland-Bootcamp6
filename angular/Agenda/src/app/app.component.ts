import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contactoSel: any

  onContactoSeleccionado($event) {
    console.log($event);
    this.contactoSel = $event;
  }
}
