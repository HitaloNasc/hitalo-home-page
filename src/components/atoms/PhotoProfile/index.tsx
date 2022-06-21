import React from 'react';
import photo from '../../../../assets/hitalo.jpg';
import { Photo } from './styles';

function PhotoProfile() {
  return <Photo src={photo} alt='Hítalo Nascimento' />;
}

export default PhotoProfile;
