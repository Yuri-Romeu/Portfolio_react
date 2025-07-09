import styled from 'styled-components';
import { P } from '../../components/Paragraph/styles';

export const Descricao = styled(P)`
  margin-bottom: 40px;
  margin-top: 24px;
`;

export const BotaoTema = styled.button`
  font-size: 10px;
  color: ${(props) => props.theme.corDeFundo};
  border-radius: 12px;
  padding: 8px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  border: none;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`;
