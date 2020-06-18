import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } alt={ props.acessibilidade } />
            <h4>{ props.campo }</h4>
            <p>{ props.valor }</p>
        </div>
    )
}

export default CardPequeno;