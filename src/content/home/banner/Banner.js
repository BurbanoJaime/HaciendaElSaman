import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Banner.scss';


export default function Banner(props){
    return (
        <div className="Banner" >
            <img src={process.env.PUBLIC_URL + '/img/banner.png'} className="Banner-fondo" />
            <FontAwesomeIcon icon="angle-double-down" className="Banner-icon"/>
        </div>
    )
}