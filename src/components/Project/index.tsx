import styled from 'styled-components';

import Paragraph from '../Paragraph';
import Title from '../Title';

import { Card, LinkBotao } from './styles';

const Project = () => {
  return (
    <Card>
      <Title>Projeto Lista de tarefa</Title>
      <Paragraph tipo="secundario">Lista de tarefa feita com VueJs</Paragraph>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  );
};

export default Project;
