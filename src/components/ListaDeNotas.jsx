import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
            {
                Array.of('Trabalho 1', 'Trabalho 2', 'Estudos').map(categoria => {
                    return (
                        <li>
                            <div>{categoria}</div>
                            <CardNota />
                        </li>
                    );
                })
            }                
            </ul>
        );
    }
}

export default ListaDeNotas;