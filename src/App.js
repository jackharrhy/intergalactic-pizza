import React, {Component, Fragment} from 'react';

import PlanetSelect from './PlanetSelect.js';
import Clickables from './Clickables.js';
import Tally from './Tally.js';
import Collection from './Collection.js';
import Shop from './Shop.js';
import products from './products.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bal: 100,
      perSec: [
        0,0,0
      ],
      clickableValues: [
        0,0,0
      ],
      products,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState) => {
      prevState.clickableValues.forEach((val, index) => {
        this.incrementClickable(prevState, index, prevState.perSec[index])
      });

      prevState.bal += prevState.perSec[2] + prevState.clickableValues[2];
      prevState.clickableValues[2] = 0;

      return {
        clickableValues: prevState.clickableValues,
        bal: prevState.bal,
      };
    });
  };

  incrementClickable = (prevState, id, value) => {
    if (value === 0) return;

    const prevVals = prevState.clickableValues;
    if (id > 0) {
      if (Math.floor(prevVals[id - 1]) >= value) {
        prevVals[id - 1] -= value;
        prevVals[id] += value;
      }
    } else {
      prevVals[id] += value;
    }
  };

  clickableClicked = (id) => {
    this.setState((prevState) => {
      this.incrementClickable(prevState, id, 1);

      return {clickableValues: prevState.clickableValues}
    });
  };

  buy = (product) => {
    if (product.cost > this.state.bal) return;

    this.setState((prevState) => {
      const bal = prevState.bal - product.cost;
      prevState.perSec[product.type] += product.perSec;
      prevState.products[product.name].cost = Math.ceil(product.cost + product.cost / 6);
      prevState.products[product.name].count += 1;
      return {
        bal,
        perSec: prevState.perSec,
        products: prevState.products,
      };
    });
  };

  onBuy = (e) => {
    const boughtName = e.target.getAttribute('name');
    for(const productName in this.state.products) {
      if (boughtName === productName) {
        this.buy(this.state.products[productName]);
        break;
      }
    }
  };

  render() {
    return (
      <Fragment>
        <PlanetSelect />

        <div className="mainDiv">
          <Clickables
            perSec={this.state.perSec}
            values={this.state.clickableValues}
            onClick={this.clickableClicked}
          />

          <div className="mainCenterDiv">
            <Tally
              bal={this.state.bal}
            />

            <Collection />
          </div>

          <Shop
            onBuy={this.onBuy}
            bal={this.state.bal}
            products={this.state.products}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
