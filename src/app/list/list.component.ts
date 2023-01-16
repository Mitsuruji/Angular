import { Component, EventEmitter, Output } from '@angular/core';
import { Candidat } from '../models/Candidat';
import { ListCandidatsService } from './../services/list-candidats.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  dataJSON : Candidat[] = [];
   

    highlightedItem: Candidat;  
  
  constructor(private listServ : ListCandidatsService) {}

  ngOnInit(): void {
    this.dataJSON = this.listServ.getAllCandidates();
  }
        

  sendJSON(i:number){
    
    this.listServ.setCandidateById(i);
  }
  
  listClick(item){
    this.highlightedItem = item;
  }
}
