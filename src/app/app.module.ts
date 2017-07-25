import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginCandidatoComponent } from './login-candidato/login-candidato.component';

import { CandidatoComponent } from './candidato/candidato.component';

@NgModule({
  declarations: [
    AppComponent,
	LoginCandidatoComponent,
	CandidatoComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
