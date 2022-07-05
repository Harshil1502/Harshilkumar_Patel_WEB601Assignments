import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content } from '../models/content';
import { PRODUCTService } from '../services/chess-champion.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  contentItem?: Content;
  id?: number;


  constructor(private router: Router,
    private route: ActivatedRoute,
    private contentService: PRODUCTService) {
  }
  ngOnInit() {
  
    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? 0); // uses the + unary operator

      this.contentService.getContentItem(this.id).subscribe(singleItem => {
        if (singleItem) {
          this.contentItem = singleItem;
        }
        else {
          this.router.navigate(['/contentNotFound']);
        }
      });
    });
  }

}
