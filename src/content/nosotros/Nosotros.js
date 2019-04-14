import React, { Component } from 'react';
import './Nosotros.scss';

// Componentes propios
import Contenido from './contenido/Contenido';

export default class Nosotros extends Component{


    render(){
        return(
            <section className="Nosotros">
            <Contenido/>                 
            </section>
        )
    }

    componentDidMount(){
        const nosotros = document.getElementById("Nosotros");
        const servicios = document.getElementById("Servicios");
        const genetica = document.getElementById("Genetica");
        const contacto = document.getElementById("Contacto");

        nosotros.classList.add("itemActivo");
        servicios.classList.remove("itemActivo");
        genetica.classList.remove("itemActivo");
        contacto.classList.remove("itemActivo");

    }
}
