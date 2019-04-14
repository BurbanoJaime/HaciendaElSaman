import React, { Component } from 'react';
import './Servicios.scss';

// Componentes propios
import BannerServicios from './bannerServicios/BannerServicios';
import Informacion from './informacion/Informacion';

// Componentes compartidos

export default class Servicios extends Component{

    render(){
        return(
            <section className="Servicios">
            <BannerServicios/>
            <Informacion/>
            </section>
        )
       
 }
    componentDidMount(){
        const nosotros = document.getElementById("Nosotros");
        const servicios = document.getElementById("Servicios");
        const genetica = document.getElementById("Genetica");
        const contacto = document.getElementById("Contacto");

        nosotros.classList.remove("itemActivo");
        servicios.classList.add("itemActivo");
        genetica.classList.remove("itemActivo");
        contacto.classList.remove("itemActivo");

    }
}
