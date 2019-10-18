import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item-list/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Item[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  onCreatePost(postData: Item) {
    this.http.post<{text: string}>(
      'http://localhost:8080/list/add',
       postData
       ).subscribe(responseData => {
         console.log('Response data: ' + responseData.text);
       });
  }

  onFetchPosts() {

  }

  onClearPosts() {
    // Send Http request
  }

}
