import React, { Component }  from 'react';
import './Info.scss';

import '../../../../general.scss';


export default class Info extends Component{
     change (show){
         var uno = document.getElementById("ganado");
         var dos = document.getElementById("tecnica");
         if(!show){
           console.log(uno)
           uno.classList.add("visible");
           dos.classList.remove("visible");  
         }else{
             console.log(dos);
             
           uno.classList.remove("visible");
           dos.classList.add("visible");
         }
    }

    render(){
        return (
            <div className="Info">
             <div id="ganado"className="Info-bloqueUno visible">
                <p>Se tiene disponible para la venta: Embriones – Terneras – Novillas Jesery puras registradas, así como terneras y novillas mestizas Jersey.</p>
                <div className="Info-bloqueUno-cartas">
                <div>EMBRIONES</div>
                <div>TERNERAS</div>
                <div>NOVILLAS</div>
                </div>
             </div>
                
             <div  id="tecnica"className="Info-bloqueDos">
                <p>Ante la apertura económica y la firma de tratados de libre comercio, resulta imprescindible, para ser competitivos y eficientes contar con el acompañamiento de profesionales idóneos en la producción ganadera.

La Hacienda El Samán encuentra profesionales zootecnistas con amplia experiencia en ganadería de leche de trópico bajo, con los conocimientos pertinentes para potenciar las fortalezas de fincas ganaderas, minimizar los riesgos y lograr rentabilidad y sostenibilidad.</p>
                
             </div>
            </div>
    
        )
    }
}