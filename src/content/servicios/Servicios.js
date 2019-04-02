import React, { Component } from 'react';
import './Servicios.scss';

// Componentes propios
import Banner from './banner/Banner';
import Informacion from './informacion/Informacion';

// Componentes compartidos
import Nav from '../../share/nav/Nav';
import Footer from '../../share/footer/Footer';

export default class Servicios extends Component{

    render(){
        return(
            <section className="Servicios">
            <Nav/>
            <Banner/>
            <Informacion/>
            <Footer/>
            </section>
        )
        const item = document.getElementById("Servicios");
        item.classList.add("itemActivo");
 }
}
