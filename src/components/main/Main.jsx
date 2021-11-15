import Section from '../section/Section';
import Slider from '../slider/Slider';
import { Helmet } from 'react-helmet';
import './Main.scss';

const Main = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Web site created using create-react-app" />
        <title>React Sneakers</title>
      </Helmet>
      <main>
        <Slider />
        <Section />
      </main>
    </>
  );
};
export default Main;
