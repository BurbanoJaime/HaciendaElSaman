import React, { Component } from 'react';
import './Menu.scss';

// Componentes compartidos

export default class Menu extends Component{
    constructor (props){
        super(props);   
    }

    change(show){
        var who = document.getElementById("who");
        var how = document.getElementById("how");

        if(show){
            console.log(who)
            who.classList.add("activo");
            how.classList.remove("activo");  
          }else{
              console.log(how);
              
            who.classList.remove("activo");
            how.classList.add("activo");
          }
    }

    render(){
        return(
            <section className="Menu">
                <h1 id="who"className="Menu-item activo" onClick={this.props.action} >¿QUIÉNES SOMOS?</h1>
                <h1 id="how" className="Menu-item" onClick={this.props.showHow}>¿QUÉ PRODUCIMOS?</h1>
            </section>
        )
    }
}