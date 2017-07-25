import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginCandidatoComponent } from './login-candidato/login-candidato.component';
import { CandidatosModule } from './candidatos/candidatos.module';
import { CandidatosComponent } from './candidatos/candidatos.component';


@NgModule({
  declarations: [
    AppComponent,
	  LoginCandidatoComponent,
    CandidatosComponent,
  ],
  imports: [
    BrowserModule,
	  FormsModule,
	  HttpModule,
    CandidatosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
