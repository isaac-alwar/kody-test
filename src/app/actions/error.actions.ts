import { props, createAction } from '@ngrx/store';
import { Item } from '../model/item.model';


/** ERROR ACTIONS */
export const retryLogin = createAction(
  '[Error/Page ] Retry Button Clicked >>> Done Page',
  props<{item: Item[], authenticator: boolean }>()
);
