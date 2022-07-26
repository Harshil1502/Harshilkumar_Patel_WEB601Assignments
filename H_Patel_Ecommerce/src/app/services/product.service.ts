import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DEFAULTPRODUCTCONTENT, PRODUCTS } from '../data/mock-products';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
 
  getContent(): Observable<Content[]> {
    return of(PRODUCTS);
  }

  getContentItem(id: number): Observable<Content> {
    for (var i = 0; i < PRODUCTS.length; i++) 
    {
      if (PRODUCTS[i].id === id) {
        return of(PRODUCTS[i]);
      }
    }
    return of(DEFAULTPRODUCTCONTENT); 
  }

  addContentItem(newContent: Content): Observable<Content[]> {
    if (!PRODUCTS.some(chessPlayer => chessPlayer.id === newContent.id)) {
      PRODUCTS.push(newContent);
    }
    return of(PRODUCTS);
  }

  updateContentItem(newContent: Content): Observable<Content[]> {
  

    PRODUCTS.forEach((individualProduct, index) => {
    

      if (individualProduct.id === newContent.id)
      {
        console.log("Trying method 2");
        PRODUCTS[index] = newContent;
      }
    });

    return of(PRODUCTS);
  }

  deleteContentItem(id: number): Observable<Content> {

    for (var i = 0; i < PRODUCTS.length; i++) 
    {
      if (PRODUCTS[i].id === id) { 
        PRODUCTS.splice(i, 1);
        console.log("Deleted the item: ", PRODUCTS);
        return of(PRODUCTS[i]);
      }
    }
    return of(DEFAULTPRODUCTCONTENT);
  }

}

