import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class PRODUCTService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("/api/product");
  }

  // C
  addProduct(getInputedContentbyUser:Content): Observable<Content>{
    console.log("Added Works: ");
    return this.http.post<Content>("/api/product", getInputedContentbyUser, this.httpOptions)
  }

  // R
  getContentItem(id: number): Observable<Content> {
    console.log("Now getting it from the server!");
    return this.http.get<Content>("/api/product/" + id);
  }

  // U
  // content item needs to have the id set correctly
  updateProduct(product: Content): Observable<any> {
    return this.http.put<any>("api/product", product, this.httpOptions);
  }

  // D
  deleteProduct(newProduct: Content): Observable<undefined> {
    // display that it's processing
    // delete the item
    return of(); // send back observable so the component can subscribe to it and know it worked
  }
}