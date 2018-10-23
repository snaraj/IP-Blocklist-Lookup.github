import React, { Component } from 'react';
import Particles from 'react-particles-js';
import App from '../App';
import '../App.css';

const particleOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

class Root extends Component {

	render() {
      return (
        <div>
          <Particles className='particles'
              params={particleOptions}
              />
          <App />
        </div>
      );
    	
    }
}

export default Root;
