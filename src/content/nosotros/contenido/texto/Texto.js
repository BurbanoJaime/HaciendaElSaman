import React, { Component }  from 'react';
import './Texto.scss';

import '../../../../general.scss';


export default class Texto extends Component{
     change (show){
         var uno = document.getElementById("bloqueUno");
         var dos = document.getElementById("bloqueDos");
         if(show){
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
            <div className="Texto">
             <div id="bloqueUno"className="Texto-bloqueUno visible">
                <p>La Hacienda El Samán está ubicada en el corregimiento de Nariño, municipio de Tuluá, en el valle geográfico del río Cauca a 980 metros sobre el nivel del mar, en un área que por tradición ha sido dedicada al cultivo de la caña de azúcar. El Samán cuenta con una extensión de 85 hectáreas, de las cuales 6.4 están dedicadas a la ganadería desde los años 90´.
                <br />
                <br />
                El desarrollo de la actividad ganadera de El Samán se ha realizado bajo la orientación profesional de sus propietarios, zootecnistas egresados de la Universidad Nacional de Colombia, vinculados al sector ganadero nacional.
                <br />
                <br />
                La Hacienda está afiliada a la Asociación Colombiana de Criadores de Ganado Jersey “Asojersey” y actualmente cuenta con más de 40 ejemplares puros registrados, estando comprometida con la producción y desarrollo de ejemplares Jersey de alta selección genética, productividad y eficiencia en el trópico bajo.
                <br />
                <br />
                El desarrollo de la ganadería en cuanto a mejoramiento genético se logra mediante el uso de la inseminación artificial y la biotecnología de transferencia de embriones por los métodos convencional y de fertilización in vitro.
                </p>
             </div>
                
             <div  id="bloqueDos"className="Texto-bloqueDos">
                <div className="Texto-bloqueDos-item">
                    <div className="Texto-bloqueDos-item-titulo">
                        <h1>LECHE</h1>
                    </div>
                        <p>
                        Nos dedicamos a la producción de leche de alto valor nutricional en lo que se refiere a solidos totales, grasa y proteína; de igual manera, la leche es de excelente calidad microbiológica, toda vez que se ordeña con equipo mecánico y unidad final al tanque, evitando contaminación del producto.
                        </p>
                </div>
    
                <div className="Texto-bloqueDos-item">
                <div className="Texto-bloqueDos-item-titulo">
                   <h2>EJEMPLARES</h2>
                   <h1>PUROS</h1>
                </div>
                    <p>
                    Se ha seleccionado y reproducido ganado Jersey de óptima caracterización racial, resistencia, fertilidad y calidad de leche.
                    </p>
                </div>
    
                <div className="Texto-bloqueDos-item">
                <div className="Texto-bloqueDos-item-titulo">
                    <h1>GANADO</h1>
                    <h2>COMERCIAL</h2>
                </div>
                    <p>
                    Se realizan cruzamientos de las vacas mestizas con Jersey para producir animales media sangre, obteniendo ejemplares con una excelente calidad y producción de leche en trópico bajo.                </p>
                </div>
                
             </div>
            </div>
    
        )
    }
}