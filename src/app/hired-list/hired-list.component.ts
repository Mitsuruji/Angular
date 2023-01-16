import { Component } from '@angular/core';
import { Candidat } from './../models/Candidat';
import { HireService } from './../services/hire-service.service';

@Component({
  selector: 'app-hired-list',
  templateUrl: './hired-list.component.html',
  styleUrls: ['./hired-list.component.css']
})
export class HiredListComponent {
  allHiredCandidates : Candidat[] = [];

  constructor(private hireServ : HireService){}

  ngOnInit(): void {
    this.allHiredCandidates = this.hireServ.getAllCandidates();
  }
}
