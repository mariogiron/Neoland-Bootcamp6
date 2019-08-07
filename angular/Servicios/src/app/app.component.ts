import { Component } from '@angular/core';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private personasService: PersonasService) { }

  async ngOnInit() {
    // console.log(this.personasService.getMayoresEdad());
    this.personasService.getAllP()
      .then((personas) => {
        console.log(personas);
      })
    console.log('UNO');

    let personasN = await this.personasService.getAllP()
    console.log(personasN);
    console.log('DOS');

    this.personasService.getNombres()
      .then(nombres => {
        console.log(nombres)
      })
  }

}