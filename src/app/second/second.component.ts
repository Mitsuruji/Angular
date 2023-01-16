import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  @Input() mainColor = 'blue';
  @Output() msgToFirst = new EventEmitter();



  sendEvent() {
    this.msgToFirst.emit('Message from second');
  }
}

