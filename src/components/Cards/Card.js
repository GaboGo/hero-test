import React from 'react';

const Card = ({ data }) => {
    return (
        <div id="card-item">
            <img src={data.image} width="200" height="100"></img>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <span>{data.tags}</span>
        </div>
    );
};

export default Card;
