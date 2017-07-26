import { Component, OnInit } from '@angular/core';

import { CandidatosService } from './candidatos.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css'],
})
export class CandidatosComponent implements OnInit {

  listaCandidatos = Array();
  modelAux: Object = {editing: false};
  
  constructor( private candidatosService: CandidatosService ) {
  }
  
  addCandidato() {
    this.listaCandidatos.push(this.modelAux);
  }
  
  clearCandidato() {
    this.modelAux = {editing: false};
  }
  
  ngOnInit() {
    this.listaCandidatos = this.candidatosService.getCandidatos();
    console.log(this.listaCandidatos);
  }

}
