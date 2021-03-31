import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Item } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
