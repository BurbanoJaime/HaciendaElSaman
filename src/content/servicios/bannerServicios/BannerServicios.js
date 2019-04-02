import React  from 'react';
import './BannerServicios.scss';

export default function BannerServicios(props){
    return (
        <div className="BannerServicios"  style={{
            backgroundImage: "url('/img/bannerServicios.png')"
        }}>
        <h1 className="BannerServicios-titulo">SERVICIOS</h1>
        </div>
    )
}