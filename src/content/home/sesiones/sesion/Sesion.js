import React, { Component }  from 'react';
import './Sesion.scss';

export default class Sesion extends Component {
    render(){
        return (
            <div className="Sesion">
                <div className="Sesion-contenido">
                    <h1 className="Sesion-contenido-titulo">{this.props.titulo}</h1>
                    <p className="Sesion-contenido-contenido">{this.props.contenido}</p>
                </div>

                <div className="Sesion-imagen">
                    <img src={process.env.PUBLIC_URL + this.props.img} />
                </div>
            </div>
        )
    }
}