import { Component, OnInit } from '@angular/core';
import { ShoppingList } from './shopping-list.model';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.css']
})
export class ShoppingListsComponent implements OnInit {

  shoppingLists: ShoppingList[] = [
    new ShoppingList("Pierwsza"),
    new ShoppingList("Druga")
  ];

  constructor() { }

  ngOnInit() {
  }

}
