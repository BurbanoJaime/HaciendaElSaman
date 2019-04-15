import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleDown, faBars } from '@fortawesome/free-solid-svg-icons';

import './App.scss';
import Layout from './Layout';
import Home from './content/home/Home';
import Nosotros from './content/nosotros/Nosotros';
import Servicios from './content/servicios/Servicios';
import Contacto from './content/contacto/Contacto';
import * as routes from './constants/routes';

library.add( faAngleDoubleDown, faBars )


class App extends Component {
 render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Layout>
                <Route exact path={routes.HOME} component={() => <Home />} />
                <Route exact path={routes.NOSOTROS} component={() => <Nosotros />} />
                <Route exact path={routes.SERVICIOS} component={() => <Servicios />} />
                <Route exact path={routes.CONTACTO} component={() => <Contacto />} />
            </Layout>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
