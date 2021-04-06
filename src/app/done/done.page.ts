import { DataService } from './../services/data.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
})
export class DonePage {
  @Input() items: Item[];
  constructor(private data: DataService, private router: Router) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getAll(): Observable<Item[]> {
    return this.data.getAllItems().pipe(map(() => this.items));
  }
  logOut(){
    this.router.navigate(['login']);
     }

}
