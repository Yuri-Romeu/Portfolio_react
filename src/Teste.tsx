import styled from 'styled-components';

type BotaoProps = {
  principal: boolean;
  fontSize?: string;
};

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'blue' : 'green')};
  font-size: ${(props) => props.fontSize || '16px'};
`;

const BotaoPerigo = styled(Botao)`
  background-color: darkred;
  color: white;

  span {
    text-decoration: line-through;
  }
`;

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Enviar
      </Botao>
      <Botao fontSize="16px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span> Excluir</span>
      </BotaoPerigo>
    </>
  );
}

export default Teste;
