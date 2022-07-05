import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { PRODUCTService } from '../services/chess-champion.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  productList: Content[];
  hikaru: Content = {
    id: 3,
    title: 'Hikaru Nakamura',
    body: "A chess champion who became a successful youtuber instead",
    author: "Alex Millerman",
    type: "GM",
    hashtags: ["supergm", "indepthanalysis"]
  }
  types: string[] = ["", "Neck Band", "Headphone", "Speaker", "Watch"];
  authorSearchMessage = {
    message: "",
    found: false
  };

  constructor(private PRODUCTService: PRODUCTService) {
    this.productList = [];

  }

  ngOnInit(): void {
    // getContent test
    this.PRODUCTService.getContent().subscribe(productListsArray =>
      this.productList = productListsArray);

 
  }

  checkForAuthorInList(authorNameValue: string): void {
    if (this.productList.some(product => product.author.toLowerCase() === authorNameValue.toLowerCase())) {
      this.authorSearchMessage.message = "Author Found";
      this.authorSearchMessage.found = true;
    }
    else {
      this.authorSearchMessage.message = "Author Not Found";
      this.authorSearchMessage.found = false;
    }
  }

}
