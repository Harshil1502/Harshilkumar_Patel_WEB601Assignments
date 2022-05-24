import { Component } from '@angular/core';
import { Content } from './models/content';
import { Lists } from './models/lists';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Harshilkumar Patel';

  product1: Content;
  product2: Content;
  product3: Content;
  product4: Content;
  allContent: Lists = new Lists ;
  

  constructor() {
  

    this.product1 = {
      id: 0,
      type: 'Neck Band',
      imageLink: '/assets/earphones_a_2.webp',
      body: 'Very good platformer on the Nintendo Switch',
      title: 'Boat Rockers',
      price: 20,
      author: 'boat'
    };
    this.product2 = {
      id: 1,
      type: 'Wired Earphone',
      imageLink: '/assets/earphones_a_1.webp',
      body: 'Sound is so realistic',
      title: 'Boat Rockers',
      price: 90,
      author: 'boat'
    };
    this.product3 = {
      id: 2,
      type: 'Cream Headphone',
      imageLink: '/assets/headphones_c_3.webp',
      body: 'The best Noice cancelation ever happened',
      title: 'Rockers 1',
      price: 100,
      author: 'rockers'
    };
    this.product4 = {
      id: 3,
      type: 'White Headphone',
      imageLink: '/assets/headphones_c_2.webp',
      body: 'Man This is a real beauty with the beast sound',
      title: 'Rockers 2',
      price: 170,
      author: 'rockers'
    };

    this.allContent.addItem(this.product1); 
    this.allContent.addItem(this.product2); 
    this.allContent.addItem(this.product3); 
    this.allContent.addItem(this.product4); 
 

  }

}
