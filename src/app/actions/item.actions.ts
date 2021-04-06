import { createAction, props } from '@ngrx/store';
import { Item } from '../item/model/item.model';


/** ITEM ACTIONS */
export const getItems = createAction(
  '[Item/Page ] Load Items >>> Done Page',
  props<{'start'}>()
);

export const getItemsSuccess = createAction(
  '[Item/ Page] get Items Success',
  props<{items: Item[]}>()
);

export const getItemsFailure = createAction(
  '[Item/ Page] get Items Failure',
  props<{error: string}>()
);



