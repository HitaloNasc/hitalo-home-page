import React from 'react';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import home from '../../../../assets/home.png';
import curriculum from '../../../../files/CURRICULUM_HÍTALO.pdf';
import { FiTerminal } from 'react-icons/fi';
import { Container, TextContainer, PhotoContainer, Image, Twinkle } from './styles';

function Home() {
  return (
    <main>
      <a id='home' />
      <Container>
        <section>
          <TextContainer>
            <span>
              <Typography size='large' color='green' spacing='small'>
                <FiTerminal style={{ marginBottom: '-0.2rem' }} />
              </Typography>
              <Typography size='xmedium'>Desenvolvedor Full Stack</Typography>
              <Twinkle>
                <Typography size='xmedium' color='green' spacing='small'>
                  |
                </Typography>
              </Twinkle>
            </span>
            <Typography size='xlarge' color='green' spacing='small'>
              Hítalo Nascimento
            </Typography>
            <div className='wrapper'>
              <Typography size='medium' spacing='small'>
                Fala guerreirinho(a), tudo bem?! Seja bem vindo(a) ao meu mundo. Aqui é onde você
                poderá ver um pouco sobre mim, minhas experiências e minhas atividades. Minhas
                paixões são desenvolver, falar sobre isto e tomar café, então se quiser conversar e
                trocar uma idéia estarei sempre disponível para um café virtual!
              </Typography>
              <Typography size='medium' spacing='small'>
                Vamos, juntos!
              </Typography>
              <Button
                fontSize='xmedium'
                color='black'
                margin='small'
                width='medium'
                padding='tiny'
                borderRadius='large'
                fontWeight='bold'
              >
                <a href={curriculum} download className='download'>
                  <Typography size='large' color='black' spacing='small'>
                    Meu currículo
                  </Typography>
                </a>
              </Button>
            </div>
          </TextContainer>
          <PhotoContainer>
            <Image src={home} alt='hitalo nascimento' />
          </PhotoContainer>
        </section>
      </Container>
    </main>
  );
}

export default Home;
