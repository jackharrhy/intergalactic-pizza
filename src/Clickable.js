import React, {PureComponent} from 'react';

/*
*/
class Clickable extends PureComponent {
  render() {
    const {
      onClick,
      text,
      value,
    } = this.props;

    return (
      <div
        onClick={onClick}
        className="clickableDiv"
      >
        <p>{`${text}`}</p>
        <p>{`${value}`}</p>
      </div>
    );
  }
}

export default Clickable;
