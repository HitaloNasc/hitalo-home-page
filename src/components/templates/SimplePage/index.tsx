import React from 'react';
import Typography from '../../atoms/Typography';
import Props from './interfaces';
import { Container, Title, Dot } from './styles';

function SimplePage({ name, title, content }: Props) {
  return (
    <section>
      <a id={name} />
      <Container>
        <section>
          <Title>
            <Typography size='large' color='text' spacing='small'>
              {title}
            </Typography>
            <Dot />
          </Title>
          {content}
        </section>
      </Container>
    </section>
  );
}

export default SimplePage;
