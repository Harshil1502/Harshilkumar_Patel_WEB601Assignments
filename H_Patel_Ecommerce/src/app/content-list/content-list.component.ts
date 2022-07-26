import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  message = {
    message: "",
    found: false
  };

  product: Content[];
  constructor() {
    this.product = [ {
      id: 0,
      type: 'Neck Band',
      imageLink: 'https://th.bing.com/th/id/OIP.Qha6RA9qWTCU00joFAIuAQHaHL?w=192&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7',
      body: 'Very good platformer on the Nintendo Switch',
      title: 'Boat Rockers',
      price: 20,
      author: 'boat',
      hashtags: ['Neck Band']

    },
    {
      id: 1,
      type: 'Headphone',
      imageLink: 'https://images-na.ssl-images-amazon.com/images/I/81Fk-T0USaL.__AC_SX300_SY300_QL70_ML2_.jpg',
      body: 'Sound is so realistic',
      title: 'Gaming Headset',
      price: 90,
      author: 'Pacrate',
      hashtags: ['Headphone']

    },
    {
      id: 2,
      type: '',
      imageLink: 'https://store.sony.com.au/dw/image/v2/ABBC_PRD/on/demandware.static/-/Sites-sony-master-catalog/default/dw24ae300f/images/MDR1000XC/MDR1000XC.png',
      body: 'The best Noice cancelation ever happened',
      title: 'Headphones',
      price: 100,
      author: 'Soney',
      hashtags: ['Headphones']

    }, 
    {
      id: 3,
      type: 'gaming',
      imageLink: 'https://m.media-amazon.com/images/I/41H0C6y447L._AC_UY327_FMwebp_QL65_.jpg',
      body: 'Man This is a real beauty with the beast sound',
      title: 'PS4 Headset',
      price: 170,
      author: 'Letton',
      hashtags: ['Beast']

    }, 
    {
      id: 4,
      type: 'Speaker',
      body: 'With Surrounding sound ',
      title: 'Rockers pod',
      price: 100,
      author: 'boat',
      hashtags: ['Speaker']
    },
    {
      id: 5,
      type: 'Watch',
      imageLink: 'https://m.media-amazon.com/images/I/71gg8mPlAuL._AC_UL480_FMwebp_QL65_.jpg',
      body: 'best fitness gadget right now',
      title: 'Apple',
      price: 500,
      author: 'Apple',
      hashtags: ['AppleWatch']

    },
    {
      id: 6,
      type: '',
      imageLink: 'https://m.media-amazon.com/images/I/71KGrESMM3L._AC_UL480_FMwebp_QL65_.jpg',
      body: ' fitness gadget',
      title: 'Apple',
      price: 450,
      author: 'Apple',
      hashtags: ['FitBit']

    }];



   }

  ngOnInit(): void {
  }

  checkForAuthorInList(productList: string): void {
    if (this.product.some(event => event.author.toLowerCase() === productList.toLowerCase())) {
      this.message.message = "Author Found";
      this.message.found = true;
    }
    else {
      this.message.message = "Author Not Found";
      this.message.found = false;
    }
  }
}
