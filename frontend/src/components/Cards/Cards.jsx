import React from 'react';

const Cards = ({ title, description, image }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        margin: '10px 36.5px',
        borderRadius: '15px',
        width: '300px',
      }}>
      <img src={image} alt={title} style={{ width: '100%', marginBottom: '10px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Cards;
