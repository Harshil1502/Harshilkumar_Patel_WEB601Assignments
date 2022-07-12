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
    return this.http.get<Content[]>("/api/addProduct");
  }

  // C
  addProductItem(newContent: Content): Observable<Content> {
    return this.http.post<Content>("/api/addProduct", newContent, this.httpOptions)
  }

  // R
  getContentItem(id: number): Observable<Content> {
    console.log("Now getting it from the server!");
    return this.http.get<Content>("/api/addProduct/" + id);
  }

  // U
  // content item needs to have the id set correctly
  updateContent(contentItem: Content): Observable<any> {
    return this.http.put<any>("api/addProduct", contentItem, this.httpOptions);
  }

  // D
  deleteContentItem(newContent: Content): Observable<undefined> {
    // display that it's processing
    // delete the item
    return of(); // send back observable so the component can subscribe to it and know it worked
  }
}