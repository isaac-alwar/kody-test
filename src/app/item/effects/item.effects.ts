import { ItemsService } from './../services/items.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ItemActions } from '../../actions';

@Injectable()
export class ItemEffects {

  constructor(
    private actions$: Actions,
    private itemService: ItemsService
  ) {}

  effectName$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(ItemActions.getItemsSuccess),
        exhaustMap(() =>
          this.itemService.getItems()
          .pipe(
            map(items => ItemActions.getItemsSuccess({ items })),
            catchError(error => of(ItemActions.getItemsFailure({ error }))))
          ),
    );
  });
}
