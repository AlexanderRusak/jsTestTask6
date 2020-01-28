import React, { Fragment } from 'react';

class Header extends React.Component{


    render(){
        return(
            <header>
                <nav>
                    <a href="/">Главная</a>
                    <a href="/actors">Актёры</a>
                </nav>
            </header>
        )
    }
}
export default Header;