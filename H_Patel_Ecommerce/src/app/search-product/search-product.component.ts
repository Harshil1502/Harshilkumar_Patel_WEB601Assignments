import { Component, OnInit } from '@angular/core';
import { DEFAULTPRODUCTCONTENT } from '../data/mock-products';
import { Content } from '../models/content';
import { PRODUCTService } from '../services/product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

   individualProduct: Content = DEFAULTPRODUCTCONTENT;

  constructor(private PRODUCTService: PRODUCTService) {

  }

  ngOnInit(): void {
    // getContentItem test
    this.PRODUCTService.getContentItem(1).subscribe(productSingleItem => {
      console.log("App component - Got the content item: ", productSingleItem);
      this.individualProduct = productSingleItem;
    });

  }

  checkForIdInList(idValue: string): void {
    this.PRODUCTService.getContentItem(Number(idValue)).subscribe(productSingleItem => {
      console.log("App component - Got the content item AGAIN: ", productSingleItem);
      this.individualProduct = productSingleItem;
    });
  }

}
