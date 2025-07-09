import { ThemeProvider } from 'styled-components';

import About from './containers/About';
import Projects from './containers/Projects';
import Sidebar from './containers/Sidebar';
import EstiloGlobal, { Container } from './styles';

import temaLight from './themes/light';
import temaDark from './themes/dark';
import { useState } from 'react';

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false);

  function trocarTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark);
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocarTema={trocarTema} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
