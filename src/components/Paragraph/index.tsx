import { P } from './styles';

export type Props = {
  children: string;
  tipo?: 'principal' | 'secundario';
  fontSize?: number;
};

const Paragraph = ({ children, tipo = 'principal', fontSize }: Props) => {
  return (
    <P fontSize={fontSize} tipo={tipo}>
      {children}
    </P>
  );
};

export default Paragraph;
