import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Box, Paragraph, Img, Img2, Caption} from './BackgroundStyles';

const Background = () =>  (
  <Section nopadding id="background">
      <SectionDivider />
      <SectionTitle main>Background</SectionTitle>
      <Box>
        <Paragraph>
          <strong style={{fontSize: "20px;"}}>Graphs</strong><br /><br />
          "A graph is a collection of nodes/vertices and edges"
        </Paragraph>
        <Paragraph>
          <strong style={{fontSize: "20px;"}}>Graphs Pt.2</strong><br /><br />
          "Graphs have numbers on them that can represent the “cost” of going somewhere called a “weight”. This can represent distance, transportation cost etc."
          <br />
          <br />
          <br />
          <Img2 src="https://www.real-statistics.com/wp-content/uploads/2021/01/network-diagram-nodes-edges.png"/>
          <Caption>Weighted Undirected Graph</Caption>
          <br />
          <br />
          <br />
          "Pathfinding algorithms are a subset of classical combinatorial optimization algorithms that generally deduce the optimal path connecting two nodes on a graph. Many applications for pathfinding exist including the evident applications in mapping and satellite or gps routing systems, however many nonintuitive uses also exit. Examples include parsing using stochastic grammar in natural language processing, solving a rubix cube, and the convex hull problem. Nodes on a graph can represent states of a system or game and edges can represent moving or transitioning between these states. A problem can simply be adapted to fit a graph data structure with optimal events being the starting and ending nodes and the shortest path representing the optimal strategy to reach one event from another. A* search is a widely used algorithm for such problems due to it’s speed (depending on the heuristic function) and efficiency. "
          <br />
          <br />
          <br />
          <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Pathfinding_2D_Illustration.svg/1200px-Pathfinding_2D_Illustration.svg.png"/>
          <br />
          <br />
          <br />
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </Paragraph>
      </Box>
      {/* 
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Qubit</ListTitle>
            <ListParagraph>
              Fundamental unit <br />
              of quantum <br />
              information
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Pathfinding</ListTitle>
            <ListParagraph>
              Finding the shortest <br />
              path between two <br />
              states of being
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>QAOA</ListTitle>
            <ListParagraph>
              A combinatorial <br />
              optimization algorithm
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      */}
    </Section>
);

export default Background;
