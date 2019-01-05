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
      bal: 0,
      perSec: 0,
      clickableValues: [
        0,0,0
      ],

      products: [
        {
          name: 'Dough boy',
          desc: 'foobar',
          perSec: 0.25,
          cost: 15,
        }
      ],
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
      prevState.bal += prevState.clickableValues[2];
      prevState.clickableValues[2] = 0;

      return {
        clickableValues: prevState.clickableValues,
        bal: prevState.bal,
      };
    });
  }

  clickableClicked = (id) => {
    this.setState((prevState) => {
      const prevVals = prevState.clickableValues;
      if (id > 0) {
        if (prevVals[id - 1] > 0) {
          prevVals[id - 1]--;
          prevVals[id]++;
        }
      } else {
        prevVals[id]++;
      }

      return {clickableValues: prevVals};
    });
  }

  render() {
    return (
      <Fragment>
        <PlanetSelect />

        <div className="mainDiv">
          <Clickables
            values={this.state.clickableValues}
            onClick={this.clickableClicked}
          />

          <div className="mainCenterDiv">
            <Tally
              bal={this.state.bal}
              perSec={this.state.perSec}
            />

            <Collection />
          </div>

          <Shop
            products={this.state.products}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
