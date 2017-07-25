import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatosComponent } from './candidatos.component';
import { CandidatosListaComponent } from './candidatos-lista/candidatos-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	CandidatosComponent,
  	CandidatosListaComponent,
  ],
  exports: [
  	CandidatosComponent,
  	CandidatosListaComponent,
  ]
})
export class CandidatosModule { }
