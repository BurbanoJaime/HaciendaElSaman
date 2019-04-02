import React, { Component } from 'react';
import './Home.scss';
// Componentes propios
import Banner from './banner/Banner';
import Titulo from './titulo/Titulo';
import Sesiones from './sesiones/Sesiones';
import Footer from '../../share/footer/Footer';

// Componentes compartidos
import Nav from '../../share/nav/Nav';

export default class Home extends Component{
    render(){
        return(
            <section className="Home">
            <Nav/>
            <Banner/>
            <Titulo/>
            <Sesiones/>
            <Footer/>

            </section>
        )
    }
}