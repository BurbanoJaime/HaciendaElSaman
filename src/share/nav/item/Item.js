import React  from 'react';
import './Item.scss';


export default function Item(props){
    return (
        <div className="Item">
            <a href="#" className="Item-link"><div>NOSOTROS</div></a>
            <a href="#"  className="Item-link"><div>SERVICIOS</div></a>
            <a href="#"  className="Item-link"><div>GENÉTICA</div></a>
            <a href="#"  className="Item-link"><div>CONTACTO</div></a>
        </div>
    )
}