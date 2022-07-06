import React, { Component } from "react";
import CardNota from "../CardNota";

import "./style.css";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
            {Array.of('Trabalho 1', 'Trabalho 2', 'Estudos').map((categoria, index) => {
                return (
                    <li className="lista-notas_item" key={index}>
                        {/* <div>{categoria}</div> */}
                        <CardNota />
                    </li>
                );
            })}                
            </ul>
        );
    }
}

export default ListaDeNotas;