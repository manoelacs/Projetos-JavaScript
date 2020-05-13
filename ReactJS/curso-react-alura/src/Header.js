import React from "react";

const Header = () =>{
    return(
        <nav>
            <div className="nav-wrapper #e57373 red lighten-2">
                <a href="#" className="brand-logo">Casa do código</a>
                <ul  className="right">
                    <li><a href="sass.html">Autores</a></li>
                    <li><a href="badges.html">Livros</a></li>
                    <li><a href="collapsible.html">Sobre</a></li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;