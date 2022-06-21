import React from 'react';
import { Container } from './styles';
import Button from '../../atoms/Button';
import { AiFillInstagram, AiOutlineGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

function SocialNetworks() {
  const handleOnClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Container>
      <Button
        borderRadius='large'
        width='auto'
        padding='medium'
        backgroundColor='linkedin'
        color='text'
        fontSize='large'
        title='Linkedin'
        hover={false}
        onClick={() => handleOnClick('https://www.linkedin.com/in/hitalonasc/')}
      >
        <AiFillLinkedin />
      </Button>
      <Button
        borderRadius='large'
        width='auto'
        color='text'
        padding='medium'
        backgroundColor='github'
        fontSize='large'
        title='Github'
        hover={false}
        onClick={() => handleOnClick('https://github.com/HitaloNasc')}
      >
        <AiOutlineGithub />
      </Button>
      <Button
        borderRadius='large'
        width='auto'
        padding='medium'
        backgroundColor='instagram'
        color='text'
        fontSize='large'
        title='Instagram'
        hover={false}
        onClick={() => handleOnClick('https://www.instagram.com/hitalo_bruno/')}
      >
        <AiFillInstagram />
      </Button>
      <Button
        borderRadius='large'
        width='auto'
        color='text'
        padding='medium'
        backgroundColor='youtube'
        fontSize='large'
        title='Youtube'
        hover={false}
        onClick={() => handleOnClick('https://www.youtube.com/channel/UCiYmjmMkJYe1nuF_g8nrG1w')}
      >
        <AiFillYoutube />
      </Button>
    </Container>
  );
}

export default SocialNetworks;
