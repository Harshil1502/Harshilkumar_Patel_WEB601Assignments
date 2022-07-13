import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PRODUCTS } from '../data/mock-products';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class AngularInMemoryWebApiService implements InMemoryDbService{

  constructor() { }
  
  createDb() {
    // setting it to the value of our array of content
    const product: Content[] = PRODUCTS;
    return {
      product: product
    };
  }

  genId(product: Content[]): number {
    return product.length > 0 ?
      Math.max(...product.map(c => c.id || 0)) + 1 : 0;
  }
}
