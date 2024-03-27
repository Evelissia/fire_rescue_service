import React from 'react';

const Titles = ({ title, subtitle }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '56px', marginTop: '52px' }}>{title}</h1>
      <h2 style={{ fontSize: '22px', marginTop: '33px' }}>{subtitle}</h2>
    </div>
  );
};

export default Titles;
