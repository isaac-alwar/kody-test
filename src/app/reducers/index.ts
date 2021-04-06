import { reducer } from './../item/reducers/item.reducer';
import * as fromDone from './../done/reducers/done.reducer';
import * as fromError from './../error/reducers/error.reducer';
import * as fromLogin from '../login/reducers/login.reducer';
import * as fromItems from '../item/reducers/item.reducer';

import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap, createFeatureSelector } from '@ngrx/store';


export interface State {
  [fromLogin.loginFeatureKey]: fromLogin.State;
  [fromItems.itemsFeatureKey]: fromItems.State;
  [fromDone.doneFeatureKey]: fromDone.State;
  [fromError.errorFeatureKey]: fromError.State;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
  >('Root reducers token', {
  factory: () => ({
    [fromLogin.loginFeatureKey]: fromLogin.reducer,
    [fromItems.itemsFeatureKey]: fromItems.reducer,
    [fromError.errorFeatureKey]: fromError.reducer,
    [fromDone.doneFeatureKey]: fromDone.reducer
  }),
});

export const selectLoginState = createFeatureSelector<State, fromLogin.State>(
  fromLogin.loginFeatureKey
);
