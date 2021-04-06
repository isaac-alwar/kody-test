import { createAction, props } from '@ngrx/store';
import { Item } from '../model/item.model';


/** LOGIN ACTIONS */
export const login = createAction(
  '[Login/Page ] Login Button clicked >>> Loading Page',
);

export const loginSuccess = createAction(
  '[Login/Page ] Login Success >>> Loading Page',
  props<{items: Item[]}>()
);

export const loginFailure = createAction(
  '[Login/ Page ] Login Failure >>> Error Page',
  props<{errorMsg: string, authenticator: boolean }>()
);

/** LOGOUT ACTION */
export const logOut = createAction(
  '[Login/Page ] LogOut Button clicked >>> Login Page',
);

