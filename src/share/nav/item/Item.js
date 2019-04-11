import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Item.scss';


export default function Item(props){
    return (
        <div className="Item">
            <div className="Item-icon" id="Menu">
                    <p>MENÚ</p>
                    <FontAwesomeIcon icon="bars"/>
                </div>
            <div className="Item-menu">
                <a href="/nosotros" className="Item-menu-link" id="Nosotros"><div>NOSOTROS</div></a>
                <a href="/servicios"  className="Item-menu-link" id="Servicios"><div>SERVICIOS</div></a>
                <a href="/"  className="Item-menu-link" id="Genetica"><div>GENÉTICA</div></a>
                <a href="/"  className="Item-menu-link" id="Contacto"><div>CONTACTO</div></a>
            </div>        
        </div>
    )
    
}