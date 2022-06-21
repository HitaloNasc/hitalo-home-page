import React from 'react';
import SimplePage from '../../templates/SimplePage';
import Pinned from '../../organisms/Pinned';

function Projects() {
  return <SimplePage name='projects' title='Projetos' content={<Pinned />} />;
}

export default Projects;
