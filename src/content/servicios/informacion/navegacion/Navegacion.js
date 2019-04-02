import React, { Component } from 'react';
import './Navegacion.scss';

// Componentes compartidos

export default class Navegacion extends Component{

    change(show){
        var venta = document.getElementById("venta");
        var asesoria = document.getElementById("asesoria");

        if(!show){
            console.log(venta)
            venta.classList.add("activo");
            asesoria.classList.remove("activo");  
          }else{
              console.log(asesoria);
              
              venta.classList.remove("activo");
              asesoria.classList.add("activo");
          }
    }

    render(){
        return(
            <section className="Navegacion">
                <h1 id="venta"className="Navegacion-item activo" onClick={this.props.venta} >VENTA DE GANADO</h1>
                <h1 id="asesoria" className="Navegacion-item" onClick={this.props.asesoria}>ASESORÍA TÉCNICA</h1>
            </section>
        )
    }
}