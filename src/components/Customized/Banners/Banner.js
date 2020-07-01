import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function HowItWorks(props) {

  return (
    <div 
      className="flex items-center" 
      style={
        { 
          backgroundImage: `url(${props.image})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          height: '500px' 
        }
      }
    >
      <div className="px-10 flex-1 text-center">
        <Typography 
          className="text-shadow text-white pb-5" 
          variant="h3"
        >
          {props.title}
        </Typography>
        <Typography 
          className="text-shadow pb-5 text-white" 
          variant="h6"
        >
          {props.subtitle}
        </Typography>
        <Button 
          className="pb-5"
          size="large"
          color="primary" 
          style={
            { 
              borderRadius: props.buttonRounded ? '9999px' : '5px', 
              backgroundColor: `${props.buttonColor}`,
              color: `${props.buttonTextColor}` 
            }
          }
          variant="contained" 
          href={props.buttonLink}
        >
          {props.buttonText}
        </Button>
      </div>
    </div>
  );
}