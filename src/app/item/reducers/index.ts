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

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: ItemState | undefined, action: Action) {
  return combineReducers({
    [fromItems.itemsFeatureKey]: fromItems.reducer,
    // [fromItemReadingList.itemReadingListFeatureKey]: fromItemReadingList.reducer
  })(state, action);
}




/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const selectItemState = createFeatureSelector<State, ItemState>(
  itemsModuleFeatureKey
);

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them usable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const selectItems = createSelector(
  selectItemState,
  (state) => state[fromItems.itemsFeatureKey].items
);

export const selectItem = createSelector(
  selectItemState,
  (state) => state[fromItems.itemsFeatureKey].items.map(items => items.title).filter(item => item)
);



