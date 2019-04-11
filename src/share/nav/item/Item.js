import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Item.scss';


export default function Item(props){
    return (
        <div className="Item">
            <div className="Item-clasico">
                <a href="/nosotros" className="Item-clasico-link" id="Nosotros"><div>NOSOTROS</div></a>
                <a href="/servicios"  className="Item-clasico-link" id="Servicios"><div>SERVICIOS</div></a>
                <a href="/"  className="Item-clasico-link" id="Genetica"><div>GENÉTICA</div></a>
                <a href="/"  className="Item-clasico-link" id="Contacto"><div>CONTACTO</div></a>
            </div>

            <div className="Item-responsive">
                <FontAwesomeIcon icon="fa-bars" className="Item-responsive-icon"/>
                <div className="Item-responsive-menu">
                    <a href="/nosotros" className="Item-responsive-menu-link" id="Nosotros"><div>NOSOTROS</div></a>
                    <a href="/servicios"  className="Item-responsive-menu-link" id="Servicios"><div>SERVICIOS</div></a>
                    <a href="/"  className="Item-responsive-menu-link" id="Genetica"><div>GENÉTICA</div></a>
                    <a href="/"  className="Item-responsive-menu-link" id="Contacto"><div>CONTACTO</div></a>

                </div>
            </div>
        
        </div>
    )
    
}