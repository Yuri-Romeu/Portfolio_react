import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { GithubSecao } from './styles';

const About = () => {
  return (
    <section>
      <Title fontSize={16}>Sobre mim</Title>
      <Paragraph tipo="principal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptas
        deserunt harum commodi explicabo iure tempora eaque a modi. Culpa
        blanditiis quis iste, obcaecati tenetur magni qui facilis architecto
        consequuntur.
      </Paragraph>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=Yuri-Romeu&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />

        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Yuri-Romeu&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  );
};
export default About;
