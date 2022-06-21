import React from 'react';
import Props from './interfaces';
// import Button from '../Button';
import Typography from '../Typography';
import { Ul, Link } from './styles';

function MenuList({ open }: Props) {
  return (
    <Ul open={open}>
      <li>
        <Link href='#stacks'>
          <Typography size='xmedium' hover={true}>
            Tecnologias
          </Typography>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <Typography size='xmedium' hover={true}>
            Projetos
          </Typography>
        </Link>
      </li>
      <li>
        <Link href='#background'>
          <Typography size='xmedium' hover={true}>
            Background
          </Typography>
        </Link>
      </li>
      {/* <li>
        <Button width='tiny' padding='mini' color='black' fontWeight='bold'>
          <Typography size='xmedium' color='black'>
            Contato
          </Typography>
        </Button>
      </li> */}
    </Ul>
  );
}

export default MenuList;
