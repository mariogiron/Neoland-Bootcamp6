import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // let arr = value.split(' ');
    // let arrN = []
    // for (let i = 0; i < arr.length; i++) {
    //   let str = arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase();
    //   arrN.push(str);
    // }
    // return arrN.join(' ');

    return value.split(' ').map(item => item[0].toUpperCase() + item.substring(1).toLowerCase()).join(' ');

    // const arrSpl = value.split(' ');
    // const arrN = arrSpl.map(item => {
    //   return item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
    // })
    // return arrN.join(' ');
  }

}
