import React, { Component } from 'react';
import './Contenido.scss';
import Menu from './menu/Menu';
import Texto from './texto/Texto';

export default class Contenido extends Component{
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
            <section className="Contenido" style={{
                backgroundImage: "url('/img/fondoNosotros.png')"
            }}>
                <Menu ref="menu" action={this.showWho} showHow={this.showHow}/>
                <Texto ref="texto"/>
            </section>
        )
    }

}