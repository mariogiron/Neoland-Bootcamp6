import { SwService } from './../sw.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  constructor(private swService: SwService) { }

  ngOnInit() {
    this.swService.getPlanets().subscribe((response) => {
      console.log(response);
    });

    this.swService.getPlanetsP().then((response) => {
      console.log(response['results']);
    })
  }

}
