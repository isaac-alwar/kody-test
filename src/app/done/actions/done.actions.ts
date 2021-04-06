import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/item/model/item.model';


export const loadSuccess = createAction(
  '[Done Page] LoadSuccess',
  props<{items: Item[]}>()
);

export const logout = createAction(
  '[Done Page] Logout >>> Login Page',
  props<{url: string}>()
);
