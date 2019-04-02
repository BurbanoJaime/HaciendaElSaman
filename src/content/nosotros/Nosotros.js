import React, { Component } from 'react';
import './Nosotros.scss';

// Componentes propios
import Contenido from './contenido/Contenido';

// Componentes compartidos
import Nav from '../../share/nav/Nav';
import Footer from '../../share/footer/Footer';

export default class Nosotros extends Component{


    render(){
        return(
            <section className="Nosotros">
            <Nav/>
            <Contenido/>
            <Footer/>
                 
            </section>
        )
    }

    componentDidMount(){
        const item = document.getElementById("Nosotros");
        item.classList.add("itemActivo");
    }
}
