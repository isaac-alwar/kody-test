import { createReducer, on } from '@ngrx/store';
import {ItemActions} from '../actions';
import { Item } from '../model/item.model';


export const itemsFeatureKey = 'items';

export interface State {
  items: Item[];
}

const initialState: State = {
  items: []
};

export const reducer  = createReducer(
  initialState,
  on(ItemActions.getItems, (state) => (state)),
  on(ItemActions.getItemsSuccess, (state, {items}) => ({
    ...state,
    items
  }))
);

