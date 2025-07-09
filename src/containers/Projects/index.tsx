import Title from '../../components/Title';
import Project from '../../components/Project';
import { Lista } from './styles';

const Projects = () => {
  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      <Lista>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
      </Lista>
    </section>
  );
};
export default Projects;
