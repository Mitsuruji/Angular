import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from '../models/Account';
import { SecondComponent } from './../../second/second.component';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {
  name : string;
  status : string = 'active';
  accounts : Account[] = [];
  @Output() onClick = new EventEmitter;

  sendAccount(){
    this.accounts.push(new Account(this.name, this.status))
    this.onClick.emit(this.accounts);
  }
}
