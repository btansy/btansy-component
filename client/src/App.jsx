import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
        // <div className="container">
        //   <div className="item one">
        //     <img src="https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?" alt=""></img>
        //   </div>
        //   <div className="item two">
        //     <img src="https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?" alt=""></img>
        //   </div>
        //   <div className="item three">
        //     <img src="https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?" alt=""></img>
        //   </div>  
        //   <div className="item four">
        //     <img src="https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?" alt=""></img>
        //   </div>
        //   <div className="item five">
        //     <p id='more'>More</p>
        //     <div id='less'>
        //       <img src="https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?" alt=""></img>
        //     </div>
        //   </div>
        //   <div className="item display">
        //     <img src="https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?" alt=""></img>
        //   </div>
        // </div>
<div className="container">
  <figure className="item one">
    <img src="https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?" alt="Gallery image 1" className="image"></img>
  </figure>
  <figure className="item two">
    <img src="https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?" alt="Gallery image 2" className="image"></img>
  </figure>
  <figure className="item three">
    <img src="https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?" alt="Gallery image 3" className="image"></img>
  </figure>
  <figure className="item four">
    <img src="https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?" alt="Gallery image 4" className="image"></img>
  </figure>
  <figure className="item five">
    <img src="https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?" alt="Gallery image 5" className="image"></img>
  </figure>
  <div className='item five shade'></div>
  <div className='item five text'>+ more</div>
  <figure className="item six">
    <img src="https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?" alt="Gallery image 6" className="image"></img>
  </figure>
</div>
    );
  }
}

export default App;