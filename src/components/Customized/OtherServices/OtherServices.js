import React from 'react';


import Typography from '@material-ui/core/Typography';
import OtherServicesCard from "./OtherServicesCard";

import Terraplanagem from '../../../../content/assets/terraplanagem.jpg';
import Assentamento from '../../../../content/assets/assentamento.jpg';
import Construção from '../../../../content/assets/construção.jpg';
import Projeto from '../../../../content/assets/projeto.jpg';
import { stringToSlug } from '../../../utils/utils';

const phone = '5555996737066'
const target = 'Outros serviços'
const message = `Olá, vi seu anúncio no site e gostaria de mais informações sobre ${target}.`

const images = [
  {
    url: Terraplanagem,
    title: 'Terraplanagem',
    width: '25%',
    buttonLink: `https://api.whatsapp.com/send?phone=${phone}&text=${message}`,
  },
  {
    url: Assentamento,
    title: 'Assentamento',
    width: '25%',
    buttonLink: `https://api.whatsapp.com/send?phone=${phone}&text=${message}`,
  },
  {
    url: Construção,
    title: 'Construção',
    width: '25%',
    buttonLink: `https://api.whatsapp.com/send?phone=${phone}&text=${message}`,
  },
  {
    url: Projeto,
    title: 'Projeto',
    width: '25%',
    buttonLink: `https://api.whatsapp.com/send?phone=${phone}&text=${message}`,
  },
];

export default function OtherServices(props) {

  return (
    <>
      <div className="text-center mb-10 px-5" id={stringToSlug("Outros Serviços")}>
        <Typography style={{ color: props.textColor }} variant="h3" gutterBottom>
          {props.title}
        </Typography>
        <Typography style={{ color: props.textColor }} variant="h5" gutterBottom>
          {props.subtitle}
        </Typography>
      </div>

      <div className="flex flex-wrap w-full">
        {images.map((image) => (
          <OtherServicesCard
            key={image.title}
            buttonLink={image.buttonLink}
            imageUrl={image.url}
            imageTitle={image.title}
            imageWidth={image.width}
            textColor="#FFF"
          />
        ))}
      </div>
    </>
  );
}