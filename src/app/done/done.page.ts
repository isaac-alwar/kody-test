import { ItemsService } from './../item/services/items.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as fromItems from 'src/app/item/reducers';
import { select, Store } from '@ngrx/store';
import * as fromDone from '../reducers';
import { ItemActions } from '../actions';
import { Item } from '../item/model/item.model';



@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
})
export class DonePage implements OnInit {

  @Input() items: Item[];
  items$: Observable<Item[]>;

  constructor(
    private itemsService: ItemsService,
    private router: Router,
    private store: Store<fromItems.State>
    ) {
      this.items$ = store.pipe(select(fromItems.selectItems));
    }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  ngOnInit() {
    this.store.dispatch(ItemActions.getItemsSuccess({items: this.items}));
  }

  logOut(){
    this.router.navigate(['login']);
     }

}
