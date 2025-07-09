import { P } from './styles';

export type Props = {
  children: string;
  tipo?: 'principal' | 'secundario';
};

const Paragraph = ({ children, tipo = 'principal' }: Props) => {
  return <P tipo={tipo}>{children}</P>;
};

export default Paragraph;
