import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('aparicion', [
      state('inicial', style({
        'opacity': '1'
      })),
      transition('void => *', [
        style({
          'opacity': '0'
        }),
        animate('2s')
      ])
    ]),
    trigger('cambiaColor', [
      state('verde', style({
        'background-color': 'green'
      })),
      state('amarillo', style({
        'background-color': 'yellow',
        'transform': 'scale(1.3)'
      })),
      state('rojo', style({
        'background-color': 'red'
      })),
      transition('void => *', [
        style({
          'transform': 'translateX(-700px)'
        }),
        animate(1000)
      ]),
      transition('verde => amarillo', animate(1000)),
      transition('amarillo => rojo', animate(1000)),
      // transition('* => *', [
      //   style({
      //     'transform': 'scale(2)'
      //   }),
      //   animate('1s')
      // ]),
      transition('rojo => verde', animate('.7s ease-out'))
    ])
  ]
})
export class AppComponent {

  estado: string
  encima: boolean;

  constructor() {
    this.estado = 'verde';
    this.encima = false;
  }

  ngOnInit() {
    setInterval(() => {
      if (this.estado == 'verde') {
        this.estado = 'amarillo';
      } else if (this.estado == 'amarillo') {
        this.estado = 'rojo';
      } else if (this.estado == 'rojo') {
        this.estado = 'verde';
      }
    }, 3000)

    console.log($('.semaforo'));
    $('h2').text('Texto cambiado desde jQuery');
  }

  onMouseEnter() {
    this.encima = true;
  }

  onMouseLeave() {
    this.encima = false;
  }

}

