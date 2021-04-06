import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private API_PATH = 'https://jsonplaceholder.typicode.com/posts';
  //'../assets/data/items.json';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http
      .get<{ items: Item[] }>(`${this.API_PATH}`)
      .pipe(map((items) => items.items));
  }

}
