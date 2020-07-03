import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export default function HowItWorksCard(props) {

  return (
    <Card
      className='my-5 mx-2'
      style={
        {
          maxWidth: 345,
          borderRadius: 10,
          backgroundColor: props.backgroundColor,
          overflow: 'initial'
        }
      }>

      <img className="mx-auto -mt-6" src={props.icon} alt="Project" width="50px" height="50px" />
      <div className="px-4 pb-8" style={{ color: props.textColor }}>
        <Typography className="text-center pb-5" gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
          {props.content}
        </Typography>
      </div>
    </Card>
  );
}