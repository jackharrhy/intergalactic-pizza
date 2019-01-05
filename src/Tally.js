import React, {PureComponent} from 'react';

/*
*/
class Tally extends PureComponent {
  render() {
    const {
      bal,
      perSec,
    } = this.props;

    return (
      <div className="tallyDiv">
        <h1>{`${bal} pizzas`}</h1>
        <h3>{`${perSec}+ per second`}</h3>
      </div>
    );
  }
}

export default Tally;
