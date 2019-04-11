import React  from 'react';
import './Logo.scss';



export default function Logo(props){
    return (
        <a href="/" className="Logo">
            <img src={process.env.PUBLIC_URL + '/img/logo.svg'} />
        </a>
    )
}