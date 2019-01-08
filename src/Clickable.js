import React, {PureComponent} from 'react';

/*
*/
class Clickable extends PureComponent {
  render() {
    const {
      onClick,
      text,
      value,
      perSec,
      imgLocation,
    } = this.props;

    return (
      <div
        onClick={onClick}
        className="clickableDiv"
      >
        <p>{`${text}`}</p>
        <img src={imgLocation} />
        <p>{`${Math.round(value * 100) / 100} of 'em`}</p>
        <p>{`${Math.round(perSec * 100) / 100}+ per second`}</p>
      </div>
    );
  }
}

export default Clickable;
