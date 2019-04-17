import React, { Component } from 'react';
import './Formulario.scss';

export default class Formulario extends Component{

render(){

    return(   
        <article className="Formulario">
        <h1 className="Formulario-titulo">ENVÍANOS UN MENSAJE</h1>
            <form action="/send.php" name="frm" method="GET">
                <label for="nombre">
                    Nombres
                    <br />
                    <input required type="text" name="nombre" id="nombre" placeholder="Andrés"/>
                </label>

                <label for="apellido">
                    Apellidos
                    <br />
                    <input required type="text" name="apellido" id="apellido" placeholder="Sandoval"/>
                </label>

                <label for="empresa" className="Empresa">
                    Empresa
                    <br />
                    <input type="text" name="empresa" id="empresa" placeholder="Hacienda el saman" />
                </label>

                <label for="ciudad">
                    Ciudad
                    <br />
                    <input required type="text" name="ciudad" id="ciudad" placeholder="Cali"/>    
                </label>

                <label for="telefono">
                    Télefono
                    <br />
                    <input required type="number" name="telefono" id="telefono" placeholder="3101478963"/>
                </label>

                <label for="email">
                    Correo Electrónico
                    <br />
                    <input type="" name="empresa" id="empresa" placeholder="hacienda@elsaman.com"/>
                </label>
                <br />

                <label for="asunto" className="Formulario-asunto">
                    Asunto
                    <br />
                    <input required type="text" name="asunto" id="asunto" placeholder="¿En que te podemos ayudar?"/>
                </label>

                <label for="mensaje" className="Formulario-texto">
                    Mensaje
                    <br />
                    <textarea required type="text" name="mensaje" id="mensaje" placeholder="Hola, estoy interesado en ..."/>    
                </label>

                <div className="Formulario-btns">
                    <button type="submit" >ENVIAR</button>
                    <button type="reset" >RESTABLECER</button>
                </div>
            </form>
        </article>
    )
}


}