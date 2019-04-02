import React  from 'react';
import './Banner.scss';

export default function Banner(props){
    return (
        <div className="Banner"  style={{
            backgroundImage: "url('/img/bannerServicios.png')"
        }}>
        <h1 className="Banner-titulo">SERVICIOS</h1>
        </div>
    )
}