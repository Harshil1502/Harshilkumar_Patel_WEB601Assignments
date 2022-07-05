import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../models/content';

@Pipe({
  name: 'filterProductType'
})
export class filterProductTypePipe implements PipeTransform {

  transform(listOfProducts: Content[], typeToFilterBy?: string): Content[] {
    return listOfProducts.filter(Product => {
      if (typeToFilterBy) {
        return typeToFilterBy === Product.type;
      }
      return !Product.type;
    });
  }

}
