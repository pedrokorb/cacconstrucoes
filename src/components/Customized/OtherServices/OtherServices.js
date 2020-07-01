import React from 'react';

import Typography from '@material-ui/core/Typography';
import OtherServicesCard from "./OtherServicesCard";

const images = [
  {
    url: '../../../../content/assets/terraplanagem.jpg',
    title: 'Terraplanagem',
    width: '25%',
    buttonLink: 'https://www.google.com.br'
  },
  {
    url: '../../../../content/assets/assentamento.jpg',
    title: 'Assentamento',
    width: '25%',
    buttonLink: 'https://www.google.com.br'
  },
  {
    url: '../../../../content/assets/construção.jpg',
    title: 'Construção',
    width: '25%',
    buttonLink: 'https://www.google.com.br'
  },
  {
    url: '../../../../content/assets/projeto.jpg',
    title: 'Projeto',
    width: '25%',
    buttonLink: 'https://www.google.com.br'
  },
];

export default function OtherServices(props) {

  return (
    <>
      <div className="text-center mb-10 px-5">
        <Typography style={{ color: '#2D2A7E' }} variant="h3" gutterBottom>
          {props.title}
        </Typography>
        <Typography style={{ color: '#2D2A7E' }} variant="h5" gutterBottom>
          {props.subtitle}
        </Typography>
      </div>

      <div className="flex flex-wrap w-full mb-10">
        {images.map((image) => (
          <OtherServicesCard
            key={image.title}
            buttonLink={image.buttonLink}
            imageUrl={image.url}
            imageTitle={image.title}
            imageWidth={image.width}
          />
        ))}
      </div>
    </>
  );
}