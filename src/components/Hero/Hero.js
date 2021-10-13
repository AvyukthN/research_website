import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Quantum A* Search 
      </SectionTitle>
      <SectionText>
        A quantum heuristic optimization to the A* search algorithm for shortest path graph problems
      </SectionText>
      <SectionText>
        Quantum Computing Research Project
        <br></br>
        Avyukth Rajendra Nilajagi (US)
        <br></br>
        June 2021
      </SectionText>
      <Button onClick={() => window.location = 'mailto:avyukthnilajagi@gmail.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;