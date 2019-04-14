import React  from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/nosotros" className="Item-menu-link" id="Nosotros"> <div>NOSOTROS</div> </Link>
            <Link to="/servicios" className="Item-menu-link" id="Servicios"> <div>SERVICIOS</div> </Link>
            <Link to="/" className="Item-menu-link" id="Genetica"> <div>GENETICA</div> </Link>
            <Link to="/" className="Item-menu-link" id="Contacto"> <div>CONTACTO</div> </Link>
            </div>        
        </div>
    )
    
}