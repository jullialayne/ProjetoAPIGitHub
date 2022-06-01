import React from 'react'; 
import '../style/styles.css';

const Card = ({imagem,titulo, texto}) =>{
    return(
        <div className='card'>
            <img src={imagem}  alt='imagem'/>
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>
    )
}

export default Card;