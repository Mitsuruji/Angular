import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImageAvatar'
})
export class NoImageAvatarPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length == 0) {
      return '../../assets/img/noAvatarMale.jpg';
    }
    else return value;
  }

}
