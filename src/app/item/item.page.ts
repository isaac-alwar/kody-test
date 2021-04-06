import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromItems from 'src/app/item/reducers';
import { Item } from './model/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  @Input() items: Item[];

  constructor( private store: Store<fromItems.State>){ }

  ngOnInit() {
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
