import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS, DEFAULTPRODUCTCONTENT } from '../data/mock-chess-champions';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class PRODUCTService {

  constructor() { }

  getContent(): Observable<Content[]> {
    return of(PRODUCTS);
  }

  /**
   * Returns a single content item at a specified id
   * @param id
   * @returns
   */
  getContentItem(id: number): Observable<Content> {
    for (var i = 0; i < PRODUCTS.length; i++) // iterate through each chess champion
    {
      if (PRODUCTS[i].id === id) { // found the item
        return of(PRODUCTS[i]);
      }
    }
    return of(DEFAULTPRODUCTCONTENT); // need to return something if the content isn't there
  }

  addContentItem(newContentItem: Content): Observable<Content[]> {
    // if there aren't some chess champions with the same id number, push the array item
    if (!PRODUCTS.some(product => product.id === newContentItem.id)) {
      PRODUCTS.push(newContentItem);
    }
    return of(PRODUCTS);
  }

  updateContentItem(newContentItem: Content): Observable<Content[]> {
    // find item in PRODUCTS with same id as newcontentitem's id
    // update the values of that item in the array with the values of the newContentItem
    // return the array after updating

    PRODUCTS.forEach((individualChessChampion, index) => {
      // one potential solution
      // if (individualChessChampion.id === newContentItem.id) // found them
      // {
      //   individualChessChampion.title = newContentItem.title;
      //   individualChessChampion.body = newContentItem.body;
      //   individualChessChampion.author = newContentItem.author;
      //   individualChessChampion.imageLink = newContentItem.imageLink;
      //   individualChessChampion.type = newContentItem.type;
      //   individualChessChampion.hashtags = newContentItem.hashtags;
      //   // return;
      // }

      if (individualChessChampion.id === newContentItem.id) // found them
      {
        console.log("Trying method 2");
        PRODUCTS[index] = newContentItem;
        // return;
      }
    });

    return of(PRODUCTS);
  }

  deleteContentItem(id: number): Observable<Content> {

    for (var i = 0; i < PRODUCTS.length; i++) // iterate through each chess champion
    {
      if (PRODUCTS[i].id === id) { // found the item
        // delete it from the array first
        PRODUCTS.splice(i, 1);
        console.log("Deleted the item: ", PRODUCTS);
        return of(PRODUCTS[i]);
      }
    }
    return of(DEFAULTPRODUCTCONTENT); // need to return something if the content isn't there
  }
}
