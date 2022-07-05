import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() product?: Content;
  @Input() isLast?: boolean;

  constructor() {
    // this.content = {
    //   id: 0,
    //   title: '',
    //   author: '',
    //   type: ''
    // };
  }

  ngOnInit(): void {
    if (this.product) {
      console.log("value of chess player: ", this.product.title);
    }
  }
  displayAuthorAndId(): void {
    console.log("Chess Player Author: ", this.product?.author, ", Chess Player ID: ", this.product?.id);
  }

}
