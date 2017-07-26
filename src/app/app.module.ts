import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginCandidatoComponent } from './login-candidato/login-candidato.component';
import { CandidatosModule } from './candidatos/candidatos.module';


@NgModule({
  declarations: [
    AppComponent,
	  LoginCandidatoComponent,
  ],
  imports: [
      BrowserModule,
	  FormsModule,
	  HttpModule,
      CandidatosModule,
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
