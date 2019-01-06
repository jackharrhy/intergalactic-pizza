import React, {Component} from 'react';

import Clickable from './Clickable';

/*
*/
class Clickables extends Component {
  firstClickableClicked = (e) => {
    this.props.onClick(0);
  };

  secondClickableClicked = (e) => {
    this.props.onClick(1);
  };

  lastClickableClicked = (e) => {
    this.props.onClick(2);
  };

  render() {
    const {
      values,
      perSec,
    } = this.props;

    return (
      <div className="clickablesDiv">
        <Clickable
          text="Construct pizza mesons"
          value={values[0]}
          perSec={perSec[0]}
          onClick={this.firstClickableClicked}
        />
        <Clickable
          text="Flux pizza oven tubes"
          value={values[1]}
          perSec={perSec[1]}
          onClick={this.secondClickableClicked}
        />
        <Clickable
          text="Translocate pizza"
          value={values[2]}
          perSec={perSec[2]}
          onClick={this.lastClickableClicked}
        />
      </div>
    );
  }
}

export default Clickables;
