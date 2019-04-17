import React  from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';



export default function Logo(props){
    return (
        <Link to="/" className="Logo">
            <img alt="Logo Hacienda El Samán" src={process.env.PUBLIC_URL + '/img/logo.svg'} />
        </Link>
    )
}