import { Component } from '@angular/core';

@Component({
  selector: 'app-list-server',
  templateUrl: './list-server.component.html',
  styleUrls: ['./list-server.component.css']
})
export class ListServerComponent {
  servers = [{
    name: 'Production Server',
    type: 'medium', 
    startedDate: new Date("2019-07-20T00:00:00.000Z"),
    status: 'critical'
  },
  {
    name: 'Testing Development Server',
    type: 'small', 
    startedDate: new Date("2018-04-20T00:00:00.000Z"),
    status: 'stable'
  },
  {
    name: 'Development Server',
    type: 'large', 
    startedDate: new Date("2017-02-22T00:00:00.000Z"),
    status: 'offline'
  }
  ,
  {
    name: 'Salih\'s Server',
    type: 'large', 
    startedDate: new Date(),
    status: 'stable'
  }];

  filterStatus : string = ''; 
}
