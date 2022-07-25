import { Component } from '@angular/core';
import { DEFAULTPRODUCTCONTENT } from './data/mock-products';
import { Content } from './models/content';
import { PRODUCTService } from './services/product.service';
import { LogUpdateService } from './log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'H_Patel_ECommerce';
  individualProduct: Content = DEFAULTPRODUCTCONTENT;

  constructor(private logService: LogUpdateService) {
  }

  ngOnInit(): void {
    // getContentItem test
    this.logService.init();

  }

}

