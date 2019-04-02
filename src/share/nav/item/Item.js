import React  from 'react';
import './Item.scss';


export default function Item(props){
    return (
        <div className="Item">
            <a href="#" className="Item-link" id="Nosotros"><div>NOSOTROS</div></a>
            <a href="#"  className="Item-link" id="Servicios"><div>SERVICIOS</div></a>
            <a href="#"  className="Item-link" id="Genetica"><div>GENÉTICA</div></a>
            <a href="#"  className="Item-link" id="Contacto"><div>CONTACTO</div></a>
        </div>
    )
}