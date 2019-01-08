import React, {PureComponent} from 'react';
import classNames from 'classnames';

/*
*/
class Product extends PureComponent {
  render() {
    const {
      bal,
      name,
      desc,
      perSec,
      cost,
      count,
      onBuy,
    } = this.props;

    return (
      <div className="productDiv">
        <h5>{`${count > 0 ? count : ""}`}</h5>
        <h1>{`${name}`}</h1>
        <h3>{`${desc}`}</h3>
        <h2>{`${perSec}`}</h2>

        <div
          className={classNames({
            buyProduct: true,
            tooExpensive: cost > bal,
          })}
          onClick={onBuy}
        >
          <p name={name}>
            {`BUY - ${cost}`}
          </p>
        </div>
      </div>
    );
  }
}

export default Product;
