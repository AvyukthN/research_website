import React from 'react';

import { Vid, BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Box, Paragraph, ImgBox, Img2, Caption} from './AbstractStyles';
import { Section, SectionDivider, SectionTitle, Image} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Abstract = () => (
  <Section nopadding id="abstract">
    <SectionDivider />
    <SectionTitle main>Overview & Abstract</SectionTitle>
    <Box>
      <Paragraph>
        <strong style={{fontSize: "20px;"}}>Pathfinding & it's Applications</strong><br /><br />
        Pathfinding is a set of computer algorithms that aim to find the most optimal path between two points. The optimal path can be the path which is shortest, the shortest one that travels through a specific set of destinations etc.
        Pathfinding, specifically shortest path pathfinding, has been applied to many tasks such as satellite navigation, google maps, and even unconventional (non-euclidian) problems such as parsing in NLP (natural language processing)
        <br />
        Here is a cool video that showcases pathfinding being used in an AI to perfect the game snake.
        <br />
        <br />
        <br />
        <Vid width="600" height="400" src="https://www.youtube.com/embed/TOpBcfbAgPg">
        </Vid>
        <br />
        <br />
        <br />
        As the video shows, pathfinding can have uses that are unconventional at first but greatly improve our understanding of an area of science.
        <br />
        <br />
        <br />
        Shortest path problems are often used in daily tasks and can also be used to tackle unconventional problems since they simply find the most optimal transition between a set of states
        The most prominent shortest path finding algorithms are Dijkstra's shortest path, and A* Search. Dijkstra's algorithm uses distance from the starting point to find an optimal shortest path, and A* search uses distance from the starting point as well as an estimated distance to the ending point to perform the same task.
        A* Search is thus faster and more efficient since it considers less points than Dijkstra's to find the most optimal path using more information.
        <br />
        <br />
        <br />
        However, A* Search is not guaranteed to find the most optimal path on every use, it's heuristic (which estimates the distance to the destination state) must either always underestimate distance or perfectly estimate it, and the worse the estimate is, the slower the algorithm runs.
        The most commonly used heuristics are euclidian or manhattan distance which sometimes grossly underestimate the distance (since they simply find the shortest distance between two points assuming there are no obstacles in between) which causes A* to have a long run time.
        A quantum optimization is needed to 
        <br />
        <br />
        <br />
        <strong style={{fontSize: "20px;"}}>Abstract</strong><br /><br />
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
    <Box>
      <Paragraph>
        <strong style={{fontSize: "20px;"}}>Quantum Pathfinding</strong><br /><br />
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