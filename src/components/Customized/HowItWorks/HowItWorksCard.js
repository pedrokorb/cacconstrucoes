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
          backgroundColor: '#2D2A7E',
          overflow: 'initial'
        }
      }>
      <img className="mx-auto -mt-6" src={props.icon} alt="Project" width="50px" height="50px" />
      <div className="px-4 pb-8">
        <Typography className="text-white text-center pb-5" gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography className="text-white" variant="body2" component="p">
          {props.content}
        </Typography>
      </div>
    </Card>
  );
}