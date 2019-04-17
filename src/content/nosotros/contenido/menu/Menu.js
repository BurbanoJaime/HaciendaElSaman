import React, { Component } from 'react';
import { connect } from 'react-redux';
import showUs from '../../../../redux/actions/showUs';

import './Menu.scss';

// Componentes compartidos

class Menu extends Component{

    change(show){
        const {
            nosotros,
        } = this.props;
        
        const who = document.getElementById("who");
        const how = document.getElementById("how");


        if(nosotros === 0){
            console.log(nosotros) 
            who.classList.add("activo");
            how.classList.remove("activo");  
        }else{
            console.log("Nosotros no funciona");
            who.classList.remove("activo");
            how.classList.add("activo");
        }

    }

    render(){
        return(
            <section className="Menu">
                <h1 id="who"className="Menu-item activo" onClick={this.props.mostrarNosotros(0)} >¿QUIÉNES SOMOS?</h1>
                <h1 id="how" className="Menu-item" onClick={this.props.mostrarComo(1)}>¿QUÉ PRODUCIMOS?</h1>
            </section>
        )
    }
}



const mapStateToProps = (state) => {
    return{
        nosotros: state.nosotros
    };
}


const mapDispatchToProps = (dispatch) => {

    return{
        showUs: () => dispatch(showUs())
    };

}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);