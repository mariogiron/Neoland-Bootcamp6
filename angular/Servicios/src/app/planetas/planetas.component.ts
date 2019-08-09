import { SwService } from './../sw.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  arrPlanetas: any[]
  currentPage: number;
  numPages: number;

  constructor(private swService: SwService) {
    this.currentPage = 1;
  }

  ngOnInit() {
    // this.swService.getPlanets().subscribe((response) => {
    //   console.log(response);
    // });

    this.recuperarPlanetas();
  }

  recuperarPlanetas() {
    this.swService.getPlanetsP(this.currentPage).then((response) => {
      this.arrPlanetas = response['results'];
      this.numPages = Math.ceil(response['count'] / 10)
    })
  }

  onPageChange(action) {
    if (action == 'prev') {
      this.currentPage--;
    } else {
      this.currentPage++;
    }
    this.recuperarPlanetas();
  }

}
