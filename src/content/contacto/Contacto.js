import React, { Component } from 'react';
import Formulario from './formulario/Formulario';
import Mapa from './mapa/Mapa';
import './Contacto.scss';

export default class Contacto extends Component{
    render(){
        return(
            <section className="Contacto">
                <Formulario />
                <Mapa />
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
        contacto.classList.add("itemActivo");

    }
}