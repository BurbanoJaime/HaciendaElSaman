import React  from 'react';
import './Footer.scss';


export default function Item(props){
    return (
        <div className="Footer">
            <h3 className="Footer-titulo"> SÍGUENOS EN NUESTRAS REDES SOCIALES</h3>
        <div className="Footer-redes">
            <div className="Footer-redes-item"></div>
            <div className="Footer-redes-item"></div>
            <div className="Footer-redes-item"></div>
        </div>

        <h3 className="Footer-subtitulo"> LLÁMANOS</h3>
        <div className="Footer-numero">318 720 1692 - 318 229 9041</div>
        <div className="Footer-bar"></div>

        </div>
    )
}