import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  name: string = 'Salih';
  formation = ' Angular';
  color = 'pink';
  hd = false;

  clickHander() {
    alert("J'ai été cliqué !");
  }

  processEventFromSecond(msg : any){
    alert(msg);
  }
}
