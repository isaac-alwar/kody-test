import { createReducer, on } from '@ngrx/store';
import {ErrorActions} from '../../actions';


export const errorFeatureKey = 'error';

export interface State {
  error: string;
}

const initialState: State = {
  error: ''
};

export const reducer  = createReducer(
  initialState,
  on(ErrorActions.retryLogin, (state) => (state))
);
