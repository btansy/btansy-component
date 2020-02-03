import React from 'react';
import Sideimage from './Sideimage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sideBarClick = this.sideBarClick.bind(this);
    this.moreClick = this.moreClick.bind(this);
    this.state = {
      imgMain:'https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?',
      imgOne:'https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?',
      imgTwo:'https://target.scene7.com/is/image/Target/GUEST_077a9562-86e2-457a-b7ec-afb1f7d8416c?',
      imgThree: 'https://target.scene7.com/is/image/Target/GUEST_6ec263bd-0c5b-4de1-a80d-3c0533b0b8e0?',
      imgFour: 'https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?',
      imgFive: 'https://d28m5bx785ox17.cloudfront.net/v1/img/h51TdE6kEIKxsaufROdLDDLuk4cK5tyTXutnDXmSlaI=/sc/600x600',
      imgMore: [],
      active: 'one'
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  sideBarClick(newMain, name) {
    this.setState({
      active: name,
      imgMain: newMain
    });
  }

  moreClick() {

  }

  render() {
    return (
<div className="container">
  <Sideimage name={'one'} active={this.state.active} imageUrl={this.state.imgOne} sideBarClick={this.sideBarClick} />
  <Sideimage name={'two'} active={this.state.active} imageUrl={this.state.imgTwo} sideBarClick={this.sideBarClick} />
  <Sideimage name={'three'} active={this.state.active} imageUrl={this.state.imgThree} sideBarClick={this.sideBarClick} />
  <Sideimage name={'four'} active={this.state.active} imageUrl={this.state.imgFour} sideBarClick={this.sideBarClick} />
  <figure id='five' onClick={() => this.sideBarClick(this.state.imgFive, 'five')}>
    <img src={this.state.imgFive} alt="Gallery image 5" className="image"></img>
  </figure>
  <div id='shade'></div>
  <div id='text'>+ more</div>
  <figure id='main'>
    <img src={this.state.imgMain} alt="Gallery image 6" className="image"></img>
  </figure>
</div>
    );
  }
}

export default App;