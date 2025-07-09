import { Title as StyleTitle } from './styles';

export type Props = {
  children: string;
  fontSize?: number;
};

const Title = (props: Props) => {
  return <StyleTitle fontSize={props.fontSize}>{props.children}</StyleTitle>;
};

export default Title;
