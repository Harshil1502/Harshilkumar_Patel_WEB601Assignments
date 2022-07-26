import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../models/content';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(productContent:Content[],inputValue?: string): Content[] {
    return productContent.filter(products => {
      return products.type === inputValue;
  });
}

}
