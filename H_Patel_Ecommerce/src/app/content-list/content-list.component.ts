import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  product: Content[];
  constructor() {
    
    this.product = [{
      id: 0,
      type: 'Neck Band',
      imageLink: '/assets/earphones_a_2.webp',
      body: 'Very good platformer on the Nintendo Switch',
      title: 'Boat Rockers',
      price: 20,
      author: 'boat'
    }, 
    {
      id: 1,
      type: 'Wired Earphone',
      imageLink: '/assets/earphones_a_1.webp',
      body: 'Sound is so realistic',
      title: 'Boat Rockers',
      price: 90,
      author: 'boat'
    }, 
    {
      id: 2,
      type: 'Cream Headphone',
      imageLink: '/assets/headphones_c_3.webp',
      body: 'The best Noice cancelation ever happened',
      title: 'Rockers 1',
      price: 100,
      author: 'rockers'
    },
    {
      id: 3,
      type: 'White Headphone',
      imageLink: '/assets/headphones_c_2.webp',
      body: 'Man This is a real beauty with the beast sound',
      title: 'Rockers 2',
      price: 170,
      author: 'rockers'
    },
    {
      id: 4,
      type: 'speaker',
      imageLink: '/assets/speaker1.webp',
      body: 'Amazing Surrounding sound',
      title: 'ripers',
      price: 40,
      author: 'ripers'
    }];


   }

  ngOnInit(): void {
  }

}
