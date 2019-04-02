import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Banner.scss';


export default function Banner(props){
    return (
        <div className="Banner" style={{
            backgroundImage: "url('/img/banner.png')"
        }}>
        <FontAwesomeIcon icon="angle-double-down" className="Banner-icon"/>
        </div>
    )
}