import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { ActivatedRoute } from '@angular/router';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-detalle-escritor',
  templateUrl: './detalle-escritor.component.html',
  styleUrls: ['./detalle-escritor.component.css']
})
export class DetalleEscritorComponent implements OnInit {

  escritor: Escritor;

  constructor(private escritoresService: EscritoresService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.escritoresService.getByIdP(params.idEscritor)
        .then((pEscritor) => {
          this.escritor = pEscritor;
        })
        .catch((err) => {
          console.log(err);
        })
    });


  }

}
