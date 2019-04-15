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
}