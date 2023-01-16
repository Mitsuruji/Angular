import { Component, Input } from '@angular/core';
import { HireService } from './../services/hire-service.service';
import { ListCandidatsService } from './../services/list-candidats.service';
import { Candidat } from './../models/Candidat';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  detailsJSON: Candidat;

  constructor(
    private hireServ : HireService,
    private listServ : ListCandidatsService
    ){}

  getSelectedDetail(){
    this.detailsJSON = this.listServ.getCandidate();
  }
    
  hireCandidate(cand){
    console.log(cand);
    this.hireServ.addHiredCandidate(cand);
  }

  ngOnInit() {
    if (!this.detailsJSON) {
      this.detailsJSON = this.listServ.getCandidateById(0);
    }
    
  }

  ngOnChanges(){
    if (this.listServ.getCandidate !== undefined) {
      this.detailsJSON = this.listServ.getCandidate();
    }
  }
}
