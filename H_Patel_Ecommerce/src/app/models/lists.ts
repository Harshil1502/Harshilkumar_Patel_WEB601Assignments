import { Content } from "./content";

export class Lists {
  private _items: Content[];

  constructor() {
    this._items = [];
  }
  get items(): Content[] {
    return this._items;
  }
  addItem(item: Content) {
    this._items.push(item);
  }
  contentLength(): number {
    return this._items.length;
  }
  getContent(index: number): string {
    if (this.contentLength() <= index) {
      return '<p>Index is outside the range of the array.</p>';
    }
    else{
      return `
      <div class="card">
        <img src="${this._items[index].imageLink}" alt="HeadPhones">
        <h2>${this._items[index].title}</h2>
        <h3>Price: ${this._items[index].price} </h3>
        <h3>Seller: ${this._items[index].author}</h3>
        <h4>Type: ${this._items[index].type}</h4>
        <p>Description: ${this._items[index].body}</p>
      </div>
    `;
    }
  }

}
