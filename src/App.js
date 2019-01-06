import React, {Component, Fragment} from 'react';

import PlanetSelect from './PlanetSelect.js';
import Clickables from './Clickables.js';
import Tally from './Tally.js';
import Collection from './Collection.js';
import Shop from './Shop.js';

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

      products: {
        'Dough boy': {
          name: 'Dough boy',
          type: 0,
          desc: 'foobar',
          perSec: 0.25,
          cost: 15,
          count: 0,
        },
        'Big dough boy': {
          name: 'Big dough boy',
          type: 0,
          desc: 'foobarbaz',
          perSec: 0.75,
          cost: 45,
          count: 0,
        },
        'Oven man': {
          name: 'Oven man',
          type: 1,
          desc: 'oven man',
          perSec: 0.35,
          cost: 25,
          count: 0,
        },
        'Send boy': {
          name: 'Send boy',
          type: 2,
          desc: 'send boy',
          perSec: 0.40,
          cost: 35,
          count: 0,
        },
      },
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
