import { Component } from '@angular/core';
import { DEFAULTPRODUCTCONTENT } from './data/mock-chess-champions';
import { Content } from './models/content';
import { PRODUCTService } from './services/chess-champion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'H_Patel_ECommerce';
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

