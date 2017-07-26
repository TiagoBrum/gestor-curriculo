import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from  '@angular/forms';

import { CandidatosService } from './candidatos.service';

import { CandidatosComponent } from './candidatos.component';
import { CandidatosListaComponent } from './candidatos-lista/candidatos-lista.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
  	CandidatosComponent,
  	CandidatosListaComponent,
  ],
  exports: [
  	CandidatosComponent,
  	CandidatosListaComponent,
  ],
  providers: [
    CandidatosService,
  ]
})
export class CandidatosModule { }
