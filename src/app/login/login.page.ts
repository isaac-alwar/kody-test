import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromLogin from 'src/app/login/reducers/login.reducer';
import { LoginActions } from './actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private store: Store<fromLogin.State>) { }

  ngOnInit() {

  }

  // onLogin(err: string, auth: boolean) {
  //   this.store.dispatch(LoginActions.loginSuccess({authenticator: auth, errorMsg: err}));
  // }

  logIn(err: string, auth: boolean){
    this.store.dispatch(LoginActions.loginSuccess({authenticator: auth, errorMsg: err}));
    this.router.navigate(['loading']);
     }
}
