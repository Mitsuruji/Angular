import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ioServStatus',
  pure: false
})
export class IoServStatusPipe implements PipeTransform {

  transform(servers: any[], search: string): any {
    if (!servers || !search) {
      return servers;
    } else {
       return servers.filter(server => server.status.includes(search)); 
      }
  }

}
