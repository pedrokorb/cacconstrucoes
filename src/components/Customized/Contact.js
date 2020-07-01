import React from 'react';

import Typography from '@material-ui/core/Typography';

export default function Contact(props) {

  return (
    <div className="py-5 px-10" style={{ backgroundColor: '#2D2A7E' }}>
      <div className="text-center mb-4 px-5">
        <Typography className="text-white" variant="h3" gutterBottom>
          Contato
        </Typography>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-10 text-center md:text-right self-center">
          <Typography className="text-white p-4" variant="body2" component="p">
            Telefone: 981662965
          </Typography>
          <Typography className="text-white p-4" variant="body2" component="p">
            Whatsapp: 999529914
          </Typography>
          <Typography className="text-white p-4" variant="body2" component="p">
            Rua Marcelo Gama, 3490 - Cachoeira do Sul - RS
          </Typography>
        </div>
        <div className="flex-1">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27726.728068437955!2d-53.7553909!3d-29.6953889!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9504a7a40359e84d%3A0xb4517ae3ca7e92e2!2sR.%20Marcelo%20Gama%2C%203490%20-%20Nossa%20Sra.%20de%20Fatima%2C%20Cachoeira%20do%20Sul%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1593637493749!5m2!1spt-BR!2sbr"  
            frameborder="0" 
            width="100%" 
            className="h-64 rounded-md"
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0"
          />
        </div>
      </div>

    </div>
  );
}