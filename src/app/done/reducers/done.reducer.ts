import { createReducer, on } from '@ngrx/store';
import { Item } from 'src/app/item/model/item.model';
import {DoneActions} from '../actions';


export const doneFeatureKey = 'done';

export interface State {
  items: Item[];
}

const initialState: State = {
  items: []
};

export const reducer  = createReducer(
  initialState,
  on(DoneActions.logout, (state) => (state)),
  on(DoneActions.loadSuccess, (state, {items}) => ({
    ...state,
    items
  }))
);
