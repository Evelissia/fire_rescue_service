import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Cards from '../../components/Cards/Cards.jsx';
import jsonData from '../MainPages/data.json';
import Titles from '../../components/Titles.jsx';

const ServicesPage = () => {
  return (
    <div>
      <Titles title="Наши услуги" />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {jsonData.map((item, index) => (
          <Cards key={index} title={item.title} description={item.description} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
