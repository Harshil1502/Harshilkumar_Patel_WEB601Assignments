import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { PRODUCTService } from '../services/product.service';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent implements OnInit {

    product: Content = {
    title: "",
    author:"",
    body: ""
  };
  temphashtags: string = '';
  constructor(private PRODUCTService: PRODUCTService) { }

  ngOnInit(): void {
  }

  formClear(){
    let form = document.getElementsByTagName('input');
    for(let i=0; i < form.length; i++){
      (form[i] as HTMLInputElement).value = "";
    }
  }

  addContentToServer(): void {
    this.product.hashtags = this.temphashtags.split(", ");
    this.PRODUCTService.addProduct(this.product)
      .subscribe((newContentFromServer: Content) =>
        console.log("Success! New content added", newContentFromServer),
      );
      this.formClear();
  }
  // updateContentOnServer(): void {
  //   this.product.hashtags = this.temphashtags.split(", ");
  //   this.PRODUCTService.updateContent(this.product)
  //     .subscribe(() =>
  //       console.log("Content updated successfully", this.product)
  //     );
  //}

  


}
