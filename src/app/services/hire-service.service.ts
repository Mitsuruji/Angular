import { Injectable } from '@angular/core';
import { Candidat } from './../models/Candidat';

@Injectable({
  providedIn: 'root'
})
export class HireService {

  private hiredCandidates: Candidat[] = [];

  getAllCandidates(){
    return this.hiredCandidates
  }

  searchCandidat(cand: Candidat) : boolean{
    if(this.hiredCandidates.indexOf(cand) == -1){
      return false
    } else return true;
    } 
  
  addHiredCandidate(cand: Candidat) {
    if(this.searchCandidat(cand)){
      alert("Candidat deja recruté");
    } else {
      this.hiredCandidates.push(cand);
      alert("Candidat recruté");
    }
  }

  constructor() { }
}
