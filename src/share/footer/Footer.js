import React  from 'react';
import './Footer.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faWhatsapp  } from "@fortawesome/free-brands-svg-icons";

export default function Item(props){
    const fb = <FontAwesomeIcon icon={faFacebookF} className="Footer-redes-item-icon"/>
    const ig = <FontAwesomeIcon icon={faInstagram}  className="Footer-redes-item-icon"/>
    const wp = <FontAwesomeIcon icon={faWhatsapp}  className="Footer-redes-item-icon"/>
    return (
        <div className="Footer">
            <h3 className="Footer-titulo"> SÍGUENOS EN NUESTRAS REDES SOCIALES</h3>
        <div className="Footer-redes">

            <div className="Footer-redes-item">
            {fb}
            </div>

            <div className="Footer-redes-item">
            {ig}
            </div>

            <div className="Footer-redes-item">
            {wp}
            </div>

        </div>

        <h3 className="Footer-subtitulo"> LLÁMANOS</h3>
        <div className="Footer-numero">318 720 1692 - 318 229 9041</div>
        <div className="Footer-bar"></div>

        </div>
    )
}