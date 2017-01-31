import React, { Component } from 'react';

import Menu from 'components/Global/Menu';

export default class About extends Component {
  render() {
    const { children } = this.props; // eslint-disable-line

    return (
      <div className='About'>
        <Menu />
        { children }
      </div>
    );
  }
}
