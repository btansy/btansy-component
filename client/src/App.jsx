import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="container">
        <div className="item one">Image 1</div>
        <div className="item two">Image 2</div>
        <div className="item three">Image 3</div>  
        <div className="item four">Image 4</div>
        <div className="item five">More</div>
        <div className="item display">Image Big</div>
      </div>
    );
  }
}

export default App;