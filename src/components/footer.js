import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <span>{this.props.itemsLeft} items left</span>
      </div>
    );
  }
}

export default Footer;
