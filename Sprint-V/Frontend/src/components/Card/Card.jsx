/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
// import "styles.css"

function Card({ title, imageUrl, description, price}) {
    return (
        <div className="card">
            <h3>{title.slice(0,20)}...</h3>
            <img src={imageUrl} alt="" />
            <h6>{description.slice(0, 40)}...</h6>
            <h4>{price}</h4>
            <button>Comprar!</button>



        </div>
    )
}

export default Card