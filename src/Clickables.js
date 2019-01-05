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
    return (
      <div className="clickablesDiv">
        <Clickable
          text="Construct pizza mesons"
          value={this.props.values[0]}
          onClick={this.firstClickableClicked}
        />
        <Clickable
          text="Flux pizza oven tubes"
          value={this.props.values[1]}
          onClick={this.secondClickableClicked}
        />
        <Clickable
          text="Translocate pizza"
          value={this.props.values[2]}
          onClick={this.lastClickableClicked}
        />
      </div>
    );
  }
}

export default Clickables;
