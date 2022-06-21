import React from 'react';
import Button from '../../atoms/Button';
import Card from '../../molecules/Card';
import Typography from '../../atoms/Typography';
import Tag from '../../atoms/Tag';
import salvus from '../../../../assets/salvus.jpeg';
import steps from '../../../../assets/steps-create.png';
import restaurants from '../../../../assets/look-for-restaurants.png';
import ifood from '../../../../assets/ifood.png';
import flappy from '../../../../assets/flappy-bird.png';
import docker from '../../../../assets/docker.png';
import { DiGithubBadge } from 'react-icons/di';
import { Container, Image, Tags } from './styles';

function Pinned() {
  const items = [
    {
      title: 'Aplicação MERV',
      subtitle: 'Sistema de gerenciamento de proficionais de saúde',
      image: salvus,
      link: 'https://github.com/HitaloNasc/merv-aplication-salvus.git',
      tags: ['Javascript', 'React', 'NodeJS', 'MongoDB', 'Express']
    },
    {
      title: 'Create Account',
      subtitle: 'Criação de conta com validação por etapas',
      image: steps,
      link: 'https://github.com/HitaloNasc/account-creation-with-step-validation.git',
      tags: ['Typescript', 'Angular12', 'NodeJS', 'MongoDB', 'Express']
    },
    {
      title: 'Look for Restaurants',
      subtitle: 'Sistema de busca de restaurantes',
      image: restaurants,
      link: 'https://github.com/HitaloNasc/look-for-restaurants.git',
      tags: ['Javascript', 'React', 'Google Maps API', 'Redux', 'Styled-components']
    },
    {
      title: 'Ifood',
      subtitle: 'Clone do aplicativo do Ifood',
      image: ifood,
      link: 'https://github.com/HitaloNasc/ifood-clone.git',
      tags: ['Javascript', 'React Native', 'Expo', 'Styled-components']
    },
    {
      title: 'Flappy Bird',
      subtitle: 'Recriação do famoso jogo Flappy Bird',
      image: flappy,
      link: 'https://github.com/HitaloNasc/game-flappy-bird.git',
      tags: ['Javascript', 'HTML', 'CSS', 'JQuery']
    },
    {
      title: 'CRUD with Docker',
      subtitle: 'cadastro simples com docker-compose',
      image: docker,
      link: 'https://github.com/HitaloNasc/docker-compose-cadastro-simples.git',
      tags: ['HTML', 'CSS', 'Javascript', 'Docker-compose', 'MySQL', 'NodeJS', 'Nginx']
    }
  ];

  return (
    <Container>
      {items.map(item => (
        <Card
          heightBody='large'
          width='medium'
          key={item.title}
          heightFooter='auto'
          footer={
            <Button onClick={() => window.open(item.link, '_blanck')}>
              <DiGithubBadge size={36} />
            </Button>
          }
        >
          <Image src={item.image} alt={item.title} />
          <Typography size='xmedium' color='green' spacing='none'>
            {item.title}
          </Typography>
          <Typography size='medium' color='text' spacing='none'>
            {item.subtitle}
          </Typography>
          <Tags>
            {item.tags.map(tag => (
              <Tag key={tag} size='xsmall' spacing='small'>
                {tag}
              </Tag>
            ))}
          </Tags>
        </Card>
      ))}
    </Container>
  );
}

export default Pinned;
