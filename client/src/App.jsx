import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sideBarClick = this.sideBarClick.bind(this);
    this.state = {
      imgMain:'https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?',
      imgOne:'https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?',
      imgTwo:'https://target.scene7.com/is/image/Target/GUEST_077a9562-86e2-457a-b7ec-afb1f7d8416c?',
      imgThree: 'https://target.scene7.com/is/image/Target/GUEST_6ec263bd-0c5b-4de1-a80d-3c0533b0b8e0?',
      imgFour: 'https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?',
      imgFive: 'https://d28m5bx785ox17.cloudfront.net/v1/img/h51TdE6kEIKxsaufROdLDDLuk4cK5tyTXutnDXmSlaI=/sc/600x600'
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  sideBarClick(newMain) {
    this.setState({
      imgMain: newMain
    });
  }

  render() {
    return (
<div className="container">
  <figure className="item one">
    <img src={this.state.imgOne} onClick={() => this.sideBarClick(this.state.imgOne)}alt="Gallery image 1" className="image"></img>
  </figure>
  <figure className="item two" onClick={() => this.sideBarClick(this.state.imgTwo)}>
    <img src={this.state.imgTwo} alt="Gallery image 2" className="image"></img>
  </figure>
  <figure className="item three" onClick={() => this.sideBarClick(this.state.imgThree)}>
    <img src={this.state.imgThree} alt="Gallery image 3" className="image"></img>
  </figure>
  <figure className="item four" onClick={() => this.sideBarClick(this.state.imgFour)}>
    <img src={this.state.imgFour} alt="Gallery image 4" className="image"></img>
  </figure>
  <figure className="item five" onClick={() => this.sideBarClick(this.state.imgFive)}>
    <img src={this.state.imgFive} alt="Gallery image 5" className="image"></img>
  </figure>
  <div className='item five shade'></div>
  <div className='item five text'>+ more</div>
  <figure className="item main">
    <img src={this.state.imgMain} alt="Gallery image 6" className="image"></img>
  </figure>
</div>
    );
  }
}

export default App;