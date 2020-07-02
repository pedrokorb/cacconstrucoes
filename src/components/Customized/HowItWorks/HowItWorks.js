import React from 'react';

import Typography from '@material-ui/core/Typography';
import HowItWorksCard from './HowItWorksCard';

import Projeto from "../../../../content/assets/icons/blueprint.png";
import Orçamento from "../../../../content/assets/icons/budget-1.png";
import Local from "../../../../content/assets/icons/house.png";
import Obra from "../../../../content/assets/icons/certificate.png";

export default function HowItWorks(props) {
  let items = [
    {
      title: 'Escolha do Projeto',
      content: 'Para facilitar o processo de construção disponibilizamos no nosso site diversas sugestões de projeto. Os projetos no nosso site são escolhidos buscando oferecer diferentes perfis de construção e buscando o melhor custo/benefício. Caso não encontre um modelo que deseja construir trabalhamos também com a personalização de projetos, alterando e criando novos modelos.',
      icon: Projeto
    },
    {
      title: 'Pré Orçamento',
      content: 'Definido o projeto, preparamos um pré-orçamento para execução da obra. Com as informações do sistema construtivo e do memorial descritivo (itens inclusos no serviço)',
      icon: Orçamento
    },
    {
      title: 'Avaliação do Local da Obra',
      content: 'Aprovado o pré-orçamento agendamos uma visita ao local da obra para vistoria do terreno, se há necessidade de alterações no projeto ou no orçamento.',
      icon: Local
    },
    {
      title: 'Contrato e Obra',
      content: 'Após a visita técnica enviamos uma minuta do contrato, com todas as informações detalhadas do processo da obra e uma via do projeto arquitetônico. E Iremos dar inicio a obra.',
      icon: Obra
    },
  ]

  return (
    <>
      <div className="text-center mb-16 px-5">
        <Typography style={{ color: '#2D2A7E' }} variant="h3" gutterBottom>
          {props.title}
        </Typography>
        <Typography style={{ color: '#2D2A7E' }} variant="h5" gutterBottom>
          {props.subtitle}
        </Typography>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ justifyItems: 'center' }}>
      {items.map(item => ( 
        <HowItWorksCard 
          key={item.title}
          title={item.title}
          content={item.content}
          icon={item.icon}
        />
      ))}
      </div>
    </>
  );
}