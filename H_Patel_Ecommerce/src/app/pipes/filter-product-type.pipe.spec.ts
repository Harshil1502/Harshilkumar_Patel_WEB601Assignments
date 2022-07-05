import { filterProductTypePipe } from './filter-product-type.pipe';

describe('filterProductTypePipe', () => {
  it('create an instance', () => {
    const pipe = new filterProductTypePipe();
    expect(pipe).toBeTruthy();
  });
});
