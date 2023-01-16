import { Component, EventEmitter, Output } from '@angular/core';
import { Candidat } from '../models/Candidat';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  
  dataFromListClick : Candidat;

  constructor(private listServ : ListCandidatsService) {}

  getCandidateClicked(){
    this.dataFromListClick = this.listServ.getCandidate();
  }
}
