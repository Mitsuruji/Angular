import { Component } from '@angular/core';

@Component({
  selector: 'app-word-sim-home',
  templateUrl: './word-sim-home.component.html',
  styleUrls: ['./word-sim-home.component.css']
})
export class WordSimHomeComponent {
  bgColor : string = 'white';
  fontSize : string = '16px';
  fontPolice : string = 'Verdana';
  wordStyles = {
    'font-family': this.fontPolice,
    'font-size': this.fontSize,
    'background-color': this.bgColor
  }

  changeStyles(){
    this.wordStyles = {
      'font-family': this.fontPolice,
      'font-size': this.fontSize,
      'background-color': this.bgColor
    }
  }

  changeSize(inp) {
    // console.log(inp.value);
    this.fontSize = inp.value + 'px';
  }
}
