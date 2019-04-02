import React, { Component } from 'react';
import './Informacion.scss';
import Navegacion from './navegacion/Navegacion';
import Info from './info/Info';

export default class Informacion extends Component{
    constructor(props){
        super(props)
        this.showWho = this.showWho.bind(this);
        this.showHow = this.showHow.bind(this);

        this.state={
            show: false
        }
    }

    showWho(){
        this.setState({
            show:false,
        })
        this.refs.texto.change(this.state.show)
        this.refs.menu.change(this.state.show)
    }

    showHow(){
        this.setState({
            show:true,
        })
        this.refs.texto.change(this.state.show)
        this.refs.menu.change(this.state.show)
    }


    render(){
        return(
            <section className="Informacion">
                <Navegacion ref="menu" venta={this.showWho} asesoria={this.showHow}/>
                <Info ref="texto"/>
            </section>
        )
    }

}