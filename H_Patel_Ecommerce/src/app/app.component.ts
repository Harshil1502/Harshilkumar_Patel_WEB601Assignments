import { Component } from '@angular/core';
import { DEFAULTPRODUCTCONTENT } from './data/mock-products';
import { Content } from './models/content';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Harshilkumar Patel';
  individualProduct: Content = DEFAULTPRODUCTCONTENT;
  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    // getContentItem test
    this.productService.getContentItem(1).subscribe(productItem => {
      console.log("App component - Got the content item: ", productItem);
      this.individualProduct = productItem;
    });

  }

  checkForIdInList(id: string): void {
    this.productService.getContentItem(Number(id)).subscribe(productItem => {
      console.log("App component - Got the content item AGAIN: ", productItem);
      this.individualProduct = productItem;
    });
  }
}
