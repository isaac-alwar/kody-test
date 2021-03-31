import { DataService, Item } from './../services/data.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
})
export class DonePage {
  @Input() item: Item;
  constructor(private data: DataService, private router: Router) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getAll(): Item[] {
    return this.data.getItems();
  }
  logOut(){
    this.router.navigate(['login']);
     }

}
