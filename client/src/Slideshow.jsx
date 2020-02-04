import React from 'react';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={this.props.hideModal}>
        <img id='modalExitButton' src='exitModal.png' />
      </div>
    );
  }
}

export default Slideshow;