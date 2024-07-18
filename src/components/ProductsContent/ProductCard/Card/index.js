import "./styles.css";
import React from 'react'


const Card = ({name, price, img, description}) => {

    return(
        <section className="card">
            <h1 className="card-name">{name}</h1>
            <img className="card-img" src={img} />
            <p className="card-text">{description}</p>
            <span className="card-price">${price}</span>
        </section>
    )
}


export default Card;