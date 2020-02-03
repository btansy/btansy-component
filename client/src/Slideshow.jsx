import React from 'react';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 onClick={this.props.hideModal}>SLIDESHOW</h1>
      </div>
    );
  }
}

export default Slideshow;