import { Injectable } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Injectable({
  providedIn: 'root'
})
export class ListCandidatsService {
  private allCandidates: Candidat[] =
  [
    new Candidat(
      0, "Inna", "Cornman", "Product Manager", 
      "Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...",
      23, "To be or not to be, this is my awesome motto!",
      235, 114, 35,
      "../../assets/img/rotating_card_profile1.png",
       "../../assets/img/rotating_card_thumb.png"
    ),
    new Candidat(
      1, "Andrew", "Mike", "Web Developer", 
      "Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...",
      29, "To be or not to be, this is my awesome motto!",
      335, 154, 24,
      "../../assets/img/rotating_card_profile2.png",
       "../../assets/img/rotating_card_thumb2.png"
    ),
    new Candidat(
      3, "John", "Marvel", "CEO", 
      "Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...",
      33, "To be or not to be, this is my awesome motto!",
      545, 231, 75,
      // "../../assets/img/rotating_card_profile3.png",
      "",
      "../../assets/img/rotating_card_thumb3.png"
    )
  ]

  private selectedCandidate : Candidat;

  getAllCandidates() {
    return this.allCandidates;
  }

  setCandidateById(id: number) {
    this.selectedCandidate = this.allCandidates[id];
  }

  getCandidate(){
    console.log(this.selectedCandidate);
    return this.selectedCandidate;
  }

  getCandidateById(id : number) {
    return this.allCandidates[id];;
  }

  constructor() { }
}
