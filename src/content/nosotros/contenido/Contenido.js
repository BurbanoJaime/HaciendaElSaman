import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Contenido.scss';
import Menu from './menu/Menu';
import Texto from './texto/Texto';

class Contenido extends Component{
    
    constructor(props){
        super(props)
        this.showWho = this.showWho.bind(this);
        this.showHow = this.showHow.bind(this);
        this.state={
            show: false
        }
    }

    showWho(){
        console.log("on who")
        this.setState({
            show:false,
        })
        this.refs.texto.change(this.state.show)
        this.refs.menu.change(this.state.show)
    }

    showHow(){
        console.log("on how")
        this.setState({
            show:true,
        })
        this.refs.texto.change(this.state.show)
        this.refs.menu.change(this.state.show)
    }


    render(){
        const { nosotros } = this.props;

        console.log (nosotros);

        return(
            <section className="Contenido" style={{
                backgroundImage: "url('/img/fondoNosotros.png')"
            }}>
                <Menu 
                ref="menu"
                action={this.showWho}
                showHow={this.showHow}
                nosotros = {nosotros}
                />

                <Texto ref="texto"/> 
            </section>
        )
    }

}


const mapStateToProps = (state) => {
    return{
        nosotros: state.nosotros
    };
}


export default connect(mapStateToProps)(Contenido);