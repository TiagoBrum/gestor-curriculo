import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCandidatoComponent } from './login-candidato.component';

describe('LoginCandidatoComponent', () => {
  let component: LoginCandidatoComponent;
  let fixture: ComponentFixture<LoginCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
