import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import Home from './content/home/Home';
import Nosotros from './content/nosotros/Nosotros';
import Servicios from './content/servicios/Servicios';

library.add( faAngleDoubleDown )


class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Home />}
        <Nosotros />*/}
        <Nosotros />
      </div>
    );
  }

}

export default App;
