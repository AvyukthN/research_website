import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Abstract from '../components/Abstract/Abstract';
import Background from '../components/Background/Background';
import Method from '../components/Method/Method';
import Results from '../components/Results/Results'
import ContactUs from '../components/ContactUs/ContactUs';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Abstract />
      <Background/>
      <Method/>
      <Results/> 
      <ContactUs/>
    </Layout>
  );
};

export default Home;
