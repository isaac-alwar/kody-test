import * as fromItems from './item.reducer';
import * as fromRoot from '../../reducers';
import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';
import { map } from 'rxjs/operators';


export const itemsModuleFeatureKey = 'itemModule';


export interface ItemState {
  [fromItems.itemsFeatureKey]: fromItems.State;
}

export interface State extends fromRoot.State {
  [itemsModuleFeatureKey]: ItemState;
}


export function reducers(state: ItemState | undefined, action: Action) {
  return combineReducers({
    [fromItems.itemsFeatureKey]: fromItems.reducer,
  })(state, action);
}


export const selectItemState = createFeatureSelector<State, ItemState>(
  itemsModuleFeatureKey
);

export const selectItems = createSelector(
  selectItemState,
  (state) => state[fromItems.itemsFeatureKey].items
);

export const selectItem = createSelector(
  selectItemState,
  (state) => state[fromItems.itemsFeatureKey].items.map(items => items.title).filter(item => item)
);



