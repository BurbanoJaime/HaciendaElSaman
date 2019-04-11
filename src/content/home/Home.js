import React, { Component } from 'react';
import './Home.scss';

// Componentes propios
import Banner from './banner/Banner';
import Titulo from './titulo/Titulo';
import Sesiones from './sesiones/Sesiones';

// Componentes compartidos
import Nav from '../../share/nav/Nav';
import Footer from '../../share/footer/Footer';

export default class Home extends Component{
    render(){
        return(
            <section className="Home">
            {/*<Nav/>*/}
            <Banner/>
            <Titulo/>
            <Sesiones/>
            <Footer/>

            </section>
        )
    }
}