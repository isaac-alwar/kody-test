import { DataService } from './../services/data.service';
import { By, element } from 'protractor';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { Router } from '@angular/router';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      providers: [ Router ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have a Login Button', () => {
  //   const buttonElement = fixture.debugElement.nativeElement.query(By.id('Login'));
  //   expect(buttonElement).toBeTruthy();
  // });

  // it('should transition to LoadingPage', () => {
  //   const buttonElement = fixture.debugElement.nativeElement.query(By.id('Login'));
  //   buttonElement.query(By.css('Login'))
  //   .triggerEventHandler('click');

  //   tick();
  //   expect(buttonElement).toHaveBeenCalledWith();
  // });

});
