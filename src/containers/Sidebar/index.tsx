import Avatar from '../../components/Avatar';
import Paragraph from '../../components/Paragraph';
import Title from '../../components/Title';

import { Descricao, BotaoTema, SidebarContainer } from './styles';

type Props = {
  trocarTema: () => void;
};

const Sidebar = (props: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Yuri Romeu</Title>
        <Paragraph tipo="secundario" fontSize={16}>
          Yuri-Romeu
        </Paragraph>
        <Descricao tipo="principal" fontSize={12}>
          Dev Front-end
        </Descricao>
        <BotaoTema onClick={props.trocarTema}>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  );
};

export default Sidebar;
