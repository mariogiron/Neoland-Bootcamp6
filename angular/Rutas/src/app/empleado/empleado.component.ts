import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    })
  }

  ngOnInit() {
  }

}
