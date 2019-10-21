import { Component, OnInit } from '@angular/core';
import { Item } from '../item-list/item.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.css']
})
export class ItemNewComponent implements OnInit {

  constructor(private http: HttpClient) { }

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

}
