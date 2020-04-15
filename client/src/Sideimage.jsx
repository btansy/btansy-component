import React from 'react';

class SideImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.class = this.class.bind(this);
  }

  class() {
    let selected = 'image';
    if (this.props.active === this.props.name) {
      selected += ' selected';
    }
    return selected;
  }

  render() {
    if (this.props.imageUrl === 'white') {
      return (
        <figure id={this.props.name} className={'image'}></figure>
      )
    } else if ((this.props.count > 5) && (this.props.name === 'five')) {
      return (
        <figure id={this.props.name} className={this.class()} onClick={this.props.showModal}>
          <img id='shadedImage' src={this.props.imageUrl} alt='Gallery image' className="image"></img>
          <div id='shade'></div>
          <div id='text' onClick={this.props.showModal} >+ {this.props.count - 4} more</div>
        </figure>
      )
    } else {
      return (
        <figure id={this.props.name} className={this.class()} onClick={() => this.props.sideBarClick(this.props.imageUrl, this.props.name)}>
          <img src={this.props.imageUrl} alt='Gallery image' className="image"></img>
        </figure>      
      )
    };
  }
}

export default SideImage;