import React , {Component} from 'react';
import './Nav.scss';

//Componentes
import Logo from './logo/Logo';
import Item from './item/Item';

export default class Nav extends Component{
    render(){
        return(
            <section className="Nav">

                <div>Aquí va el logo</div>
                <Logo />
                <Item />
            </section>
        )
    }
}