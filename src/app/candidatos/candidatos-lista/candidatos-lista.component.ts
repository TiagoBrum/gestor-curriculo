import { Component, OnInit } from '@angular/core';

import { CandidatosService } from '../candidatos.service';

@Component({
  selector: 'app-candidatos-lista',
  templateUrl: './candidatos-lista.component.html',
  styleUrls: ['./candidatos-lista.component.css']
})
export class CandidatosListaComponent implements OnInit {

  listaCandidatos = Array();
  
  constructor( private candidatosService: CandidatosService ) { }

  ngOnInit() {
    this.listaCandidatos = this.candidatosService.getCandidatos();
  }

}
