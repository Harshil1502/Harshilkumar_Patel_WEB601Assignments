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
    const chess: Content[] = PRODUCTS;
    return {
      chess: chess
    };
  }

  genId(content: Content[]): number {
    return content.length > 0 ?
      Math.max(...content.map(c => c.id || 0)) + 1 : 0;
  }
}
