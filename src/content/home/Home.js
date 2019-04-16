import React, { Component } from 'react';
import './Home.scss';

// Componentes propios
import Banner from './banner/Banner';
import Titulo from './titulo/Titulo';
import Sesiones from './sesiones/Sesiones';

export default class Home extends Component{
    render(){
        return(
            <section className="Home">
                <Banner/>
                <Titulo/>
                <Sesiones/>
            </section>
        )
    }
    
    componentDidMount(){
        const nosotros = document.getElementById("Nosotros");
        const servicios = document.getElementById("Servicios");
        const genetica = document.getElementById("Genetica");
        const contacto = document.getElementById("Contacto");

        nosotros.classList.remove("itemActivo");
        servicios.classList.remove("itemActivo");
        genetica.classList.remove("itemActivo");
        contacto.classList.remove("itemActivo");

    }
}