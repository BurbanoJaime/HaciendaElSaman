import React from 'react';
import './Mapa.scss';

export default function Mapa (props){

    return(
        <article className="Mapa">
            <iframe className="Mapa-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.6210601285584!2d-76.2427866847202!3d4.097277347733575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e39c5e72d0edc89%3A0x51b3793677fe78c4!2sHacienda+El+Sam%C3%A1n!5e0!3m2!1ses!2sco!4v1555338374468!5m2!1ses!2sco"
            allowfullscreen></iframe>
        </article>
    )

}