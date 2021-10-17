import React from 'react';

class Image extends React.Component {
  render() {
    const { src } = this.props;
    return (
      <img src={ src } alt="dog" />
    )
  }
}

export default Image;