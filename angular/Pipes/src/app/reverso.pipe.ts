import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverso'
})
export class ReversoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const arrSpl = value.split(' ');
    let arrN = [];
    for (let i = arrSpl.length - 1; i >= 0; i--) {
      arrN.push(arrSpl[i]);
    }
    return arrN.join(' ');
  }

}
