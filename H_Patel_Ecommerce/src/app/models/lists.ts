import { Content } from "./content";

export class Lists {
  private _items: Content[];

  constructor() {
    this._items = [];
  }
  get items():Content[] {
    return this._items;
  }
  addItem(item: any) {
    this._items.push(item);
  }
  contentLength() {
    return this._items.length;
  }
  getContent(index: number) {
    if (index <= this._items.length){
     return `
            <img src= ${this._items[index].imageLink} width="250px" height="250px" class="product-image" />
            <div style="margin:20px">
              <p class='product-name'>${this._items[index].title}</p>
              <p class="product-price" style="font-weight: 800; margin-top: 6px; color: black;">$${this._items[index].price} </p>
              <p>Type: ${this._items[index].type}</p>
              <p>${this._items[index].author}</p>
            </div>
      `;

    } else {
      return this.error(index);
    }
    }
    error(index: number){
      return `<div class="error"> The Item is temporary unavailable </div>`
    }
  }

