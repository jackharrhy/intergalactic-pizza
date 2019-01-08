import React, {PureComponent} from 'react';

/*
*/
class Tally extends PureComponent {
  render() {
    const {
      bal,
    } = this.props;

    return (
      <div className="tallyDiv">
        <img alt="cartoon pizza" src="svg/pizza.svg" />
        <h1>{`${Math.floor(bal)} pizzas`}</h1>
      </div>
    );
  }
}

export default Tally;
