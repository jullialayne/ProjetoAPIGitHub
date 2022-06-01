import React from 'react'; 
import '../style/styles.css';

const Card = ({children}) =>{
    return(
        <div className='cards'>
           {children}
        </div>
    )
}

export default Card;