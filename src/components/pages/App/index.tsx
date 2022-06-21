import React from 'react';
import NavBar from '../../organisms/NavBar';
import Home from '../Home';
import SocialNetworks from '../../organisms/SocialNetworks';
import Stacks from '../Stacks';
import Projects from '../Projects';
// import Background from '../Background';
import { Container, Networks } from './styles';

function App() {
  return (
    <Container>
      <NavBar />
      <Home />
      <Networks>
        <SocialNetworks />
      </Networks>
      <Stacks />
      <Projects />
      {/* <Background /> */}
    </Container>
  );
}

export default App;
