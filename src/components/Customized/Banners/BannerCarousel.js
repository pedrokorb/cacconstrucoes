import React from 'react';
import Slider from "react-slick";
import Banner from "./Banner";

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Casa from "../../../../content/assets/casa.jpg";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <NavigateNextIcon
      className={className}
      style={
        {
          ...style,
          display: "block",
          color: "white",
          width: '60px',
          height: '60px',
          marginRight: '25px',
          zIndex: 99,
          textShadow: '2px 2px 4px #000000'
        }
      }      
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <NavigateBeforeIcon
      className={className}
      style={
        { 
          ...style, 
          display: "block", 
          color: "white", 
          width: '60px', 
          height: '60px',
          marginLeft: '25px',
          zIndex: 99,
          textShadow: '2px 2px 4px #000000'
        }
      }
      onClick={onClick}
    />
  );
}

export default function BannerCarousel(props) {
  let items = [
    { 
      title: "Pensando em construir?",
      subtitle: "Conheça o projeto da sua nova casa e solicite um orçamento!",
      buttonRounded: true,
      buttonText: "Chamar no WhatsApp",
      buttonLink: "https://www.google.com.br",
      buttonColor: '#FFF', 
      buttonTextColor: '#2D2A7E',
      image: Casa 
    },
    // { 
    //   title: "Cavalo",
    //   subtitle: "Este lindo cavalo vai fazer você comprar",
    //   buttonRounded: false,
    //   buttonText: "Chamar no Zap",
    //   buttonLink: "https://www.google.com.br",
    //   buttonColor: '#FFF',
    //   buttonTextColor: '#000',
    //   image: './horse.png' 
    // },
    // { 
    //   title: "Gato Brabo",
    //   subtitle: "Este lindo gato vai fazer você comprar",
    //   buttonRounded: true,
    //   buttonText: "Chamar no Zap",
    //   buttonLink: "https://www.google.com.br",
    //   buttonColor: '#00F',
    //   buttonTextColor: '#FFF',
    //   image: './cat.jpg' 
    // }
  ];

  let settings = {
    dots: false,
    arrows: items.length > 1 ? true : false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Slider {...settings}>
      {items.map(item => (
        <div key={item.title}>
          <Banner
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            buttonRounded={item.buttonRounded}
            buttonText={item.buttonText}
            buttonLink={item.buttonLink}
            buttonColor={item.buttonColor}
            buttonTextColor={item.buttonTextColor}
          />
        </div>  
      ))}
    </Slider>
  );
}