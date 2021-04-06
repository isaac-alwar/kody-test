import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Item } from '../model/item.model';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private itemsUrl = 'https://jsonplaceholder.typicode.com/posts'; // '/assets/data/items.json';
  public items: Item[];

  constructor(private http: HttpClient) { }

  public getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl).pipe(map(() => this.items));
  }

  // public getItemByTitle(title: string)  {
  //   return this.http.get<Item>(this.itemsUrl/title);
  // }
}
