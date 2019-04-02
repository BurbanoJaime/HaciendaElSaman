import React, { Component } from 'react';
import './Servicios.scss';

// Componentes propios
import BannerServicios from './bannerServicios/BannerServicios';
import Informacion from './informacion/Informacion';

// Componentes compartidos
import Nav from '../../share/nav/Nav';
import Footer from '../../share/footer/Footer';

export default class Servicios extends Component{

    render(){
        return(
            <section className="Servicios">
            <Nav/>
            <BannerServicios/>
            <Informacion/>
            <Footer/>
            </section>
        )
       
 }
 componentDidMount(){
    const item = document.getElementById("Servicios");
    item.classList.add("itemActivo");
}
}
