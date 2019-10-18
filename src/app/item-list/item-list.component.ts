import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  loadedItems: Item[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchItems();
  }

  private fetchItems() {
    this.http.get<{ [key: string]: Item}>('http://localhost:8080/list/all')
    .pipe(map(responseData => {
      const itemsArray: Item[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          itemsArray.push({ ...responseData[key], id: key } );
        }
      }
      return itemsArray;
    }))
    .subscribe(items => {
      this.loadedItems = items;
    });
  }

}
