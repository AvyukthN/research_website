import React from 'react';

import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Box, Paragraph, Img, Img2, Caption} from './MethodStyles';
/*
REALLY GOOD LIGHT MODE SYNTAX HIGHLIGHTING
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
*/
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";


const codeString = `def AStar(self, heuristic_type='euclidian'):
  count = 0
  open_set = PriorityQueue()
  # PQ node -> (f_score, count, node_coords)
  open_set.put((0, count, self.starting_node))
  came_from = {}

  g_score = {}
  for i in range(len(self.grid)):
      for j in range(len(self.grid[i])):
          g_score.update({(i, j) : float('inf')})

  g_score[self.starting_node] = 0

  f_score = {}
  for i in range(len(self.grid)):
      for j in range(len(self.grid[i])):
          f_score.update({(i, j) : float('inf')})

  f_score[self.starting_node] = self.euclidian(self.starting_node, self.ending_node)

  open_set_hash = {self.starting_node}

  while not open_set.empty():
      current_node = open_set.get()[2] # get's f score of highest priority element in queue
      open_set_hash.remove(current_node)

      if (current_node[1], current_node[0]) == self.ending_node:
          print(self.reconstruct_path(came_from, current_node))
          return True # reconstruct path
      
      for neighbor in self.get_neighbors(current_node):
          temp_g_score = g_score[current_node] + 1

          if temp_g_score < g_score[neighbor]: # checking if we found a better path to the neighbor we are looking at
              # updating g_score of neighbor if it is lower
              came_from[neighbor] = current_node
              g_score[neighbor] = temp_g_score
              f_score[neighbor] = temp_g_score + self.euclidian(neighbor, self.ending_node)

              if neighbor not in open_set_hash:
                  count += 1
                  open_set.put((f_score[neighbor], count, neighbor))
                  open_set_hash.add(neighbor)

                  self.open_node(neighbor)

      if current_node != self.starting_node: # if node we just considered is not start node then close it off (already considered and won't be added into priority queue again)
          self.close_node(current_node)
`;

const Method = () =>  (
  <Section nopadding id="method">
      <SectionDivider />
      <SectionTitle main>Method</SectionTitle>
      <Box>
        <Paragraph>
          <strong style={{fontSize: "20px;"}}>Graph Implementation</strong><br /><br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Paragraph>
        <Paragraph>
          <strong style={{fontSize: "20px;"}}>Priority Queues</strong><br /><br />
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          <br />
          <br />
          <br />
          <Img2 src="https://bradfieldcs.com/algos/trees/priority-queues-with-binary-heaps/figures/heap-order.png"/>
          <Caption>Priority Queue Modeled as Binary Heap</Caption>
          <br />
          <br />
          <br />
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          <br />
          <br />
          <br />
          <SyntaxHighlighter language="python" style={atomDark}>
            {codeString}
          </SyntaxHighlighter>
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

export default Method;