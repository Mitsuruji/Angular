import { Component, Input } from '@angular/core';
import { Account } from './../models/Account';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent {
  @Input() accountsList : Account[];

  setStatus(i, status){
    this.accountsList[i].status = status;
  }
}
