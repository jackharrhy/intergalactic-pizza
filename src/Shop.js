import React, {PureComponent} from 'react';

import Product from './Product';

/*
*/
class Shop extends PureComponent {
  render() {
    const {
      products
    } = this.props;

    console.log(products);

    return (
      <div className="shopDiv">
        {
          products.map((product) => (
            <Product
              {...product}
            />
          ))
        }
      </div>
    );
  }
}

export default Shop;
