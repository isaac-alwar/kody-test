import { createReducer, on } from '@ngrx/store';
import {LoginActions} from '../actions';


export const loginFeatureKey = 'login';

export interface State {
  authenticator: boolean;
  errorMsg: string;
}

const initialState: State = {
  authenticator: null,
  errorMsg: ''
};

export const reducer  = createReducer(
  initialState,
  on(LoginActions.login, (state) => (state)),
  on(LoginActions.loginSuccess, (state) => ({
    ...state,
    authenticator: true,
    errorMsg: null
  })),
  on(LoginActions.loginFailure, (state, error) => ({
    ...state,
    // errorMsg: error,
    authenticator: false
  }))
);
