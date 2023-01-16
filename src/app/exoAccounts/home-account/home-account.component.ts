import { Component } from '@angular/core';
import { Account } from './../models/Account';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrls: ['./home-account.component.css']
})
export class HomeAccountComponent {
  accountsToSend: Account[];

  sendAccountToList(accounts){
    this.accountsToSend = accounts;
  }
}
