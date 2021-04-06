import { createAction, props } from '@ngrx/store';
import { Item } from '../model/item.model';


/** ITEM ACTIONS */
export const getAll = createAction(
  '[Item/Page ] Load Items >>> Done Page',
  props<{item: Item[]}>()
);

