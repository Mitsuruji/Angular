import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortTxt'
})
export class ShortTxtPipe implements PipeTransform {

  transform(value: string, nbMax:number): string {
    if (value.length <= nbMax) {
      return value;
    } else{
      return value.substring(0, nbMax) + '...';
    }
  }
}
