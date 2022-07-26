import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  message = {
    message: "",
    found: false
  };

  product: Content[];
  constructor() {
    this.product = [];



   }

  ngOnInit(): void {
  }

  checkForAuthorInList(productList: string): void {
    if (this.product.some(event => event.author.toLowerCase() === productList.toLowerCase())) {
      this.message.message = "Author Found";
      this.message.found = true;
    }
    else {
      this.message.message = "Author Not Found";
      this.message.found = false;
    }
  }
}
