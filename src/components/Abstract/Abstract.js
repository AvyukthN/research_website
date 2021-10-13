import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Box, Paragraph, ImgBox, Img2, Caption} from './AbstractStyles';
import { Section, SectionDivider, SectionTitle, Image} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Abstract = () => (
  <Section nopadding id="abstract">
    <SectionDivider />
    <SectionTitle main>Abstract</SectionTitle>
    <Box>
      <Paragraph>
        <strong style={{fontSize: "20px;"}}>Pathfinding & Stuff</strong><br /><br />
        This research investigates a quantum improvement on the A* pathfinding algorithm. A* pathfinding uses heuristics to estimate the distance of any node on a graph to the destination node on a graph. Current heuristics like euclididan distance simply estiamte the exact distance between any node and the destination node which leads to severe underestimation. While A* search is guaranteed to find a shortest path in using such a heuristics it runs for a much longer time and is extremely memory intensive since it has to consdier many nodes before finding the most optimal ones.
        <br />
        <br />
        <br />
        <Img2 src="/images/astar.gif"/>
        <Caption>A* Search Demo</Caption>
        <br />
        <br />
        <br />
        Quantum computing has the ability to estimate the distance between any two nodes at a much higher accuracy and precision allowing for a forseeable speedup in A*. This research will utilize quantum techniques as the heuristic for A* and observe any speedups.
      </Paragraph>
    </Box>
  </Section>
  // <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Pathfinding_2D_Illustration.svg/1200px-Pathfinding_2D_Illustration.svg.png" style={{ width: "80%;", height: "80%;", marginLeft: "auto;", marginRight: "auto;", display: "block;", marginTop: "50px;", marginBottom: "50px;" }} />
);

export default Abstract;