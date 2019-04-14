import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Ejemplo.styles';

class Ejemplo extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Ejemplo will mount');
  }

  componentDidMount = () => {
    console.log('Ejemplo mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Ejemplo will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Ejemplo will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Ejemplo did update');
  }

  componentWillUnmount = () => {
    console.log('Ejemplo will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="EjemploWrapper">
        Test content
      </div>
    );
  }
}

Ejemplo.propTypes = {
  // bla: PropTypes.string,
};

Ejemplo.defaultProps = {
  // bla: 'test',
};

export default Ejemplo;
