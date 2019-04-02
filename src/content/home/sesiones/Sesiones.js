import React, {Component } from 'react';
import data from './sesiones.json';
import './Sesiones.scss';

import Sesion from './sesion/Sesion';


export default class  Sesiones extends Component{


    render(){
        return (
            <div className="Sesiones">
            {
                data.map((item)=> {
                    return <Sesion
                    {...item} />
                })
            }
                <Sesion/>
            </div>
        )
    }
}