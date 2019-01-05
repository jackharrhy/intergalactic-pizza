import React, {PureComponent} from 'react';

/*
*/
class Product extends PureComponent {
  render() {
    const {
      name,
      desc,
      perSec,
      cost,
    } = this.props;

    return (
      <div className="productDiv">
        <p>{`${name}`}</p>
        <p>{`${desc}`}</p>
        <p>{`${perSec}`}</p>

        <div className="buyProduct">
          <p>{`${cost}`}</p>
        </div>
      </div>
    );
  }
}

export default Product;
