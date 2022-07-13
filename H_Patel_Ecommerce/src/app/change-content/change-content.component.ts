import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content } from '../models/content';
import { PRODUCTService } from '../services/product.service';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent implements OnInit {
  id? : number;

  
  routeURL = this.router.url;

  verify_and_refirect_Route: boolean | undefined;

  product: Content = {
    title: '',
    body: '',
    author: '',
    type: ''
  };
  temphashtags: string = '';
  constructor(private router: Router,
    private route: ActivatedRoute, private PRODUCTService: PRODUCTService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? );
      this.product.id = this.id;
    });
    if(this.routeURL === '/addContent')
    {
      console.log("Add Content works Here....")
      this.verify_and_refirect_Route = true;
    }
    else
    {
        console.log("Update Content works Here....")
        this.verify_and_refirect_Route = false;
      }
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
    .subscribe(newContentFromServer =>
      console.log("Success! New content added", this.product)
      );
      this.formClear();
  }
  updateContentOnServer() {
    this.product.hashtags = this.temphashtags.split(", ");
    this.PRODUCTService.updateProduct(this.product).subscribe(() =>
    console.log("Content updated successfully from Update", this.product)
  );
      this.formClear();
  }
}
function savedata(savedata: any) {
  throw new Error('Function not implemented.');
}