import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { GridContainer, BlogCard, List, ListContainer, ListItem, ListParagraph, ListTitle, Box, Paragraph, Img, Img2, Caption} from './ProgressStyles';
import { research_meetings } from '../../constants/progress'

const Meetings = () =>  (
  <Section nopadding id="meetings">
    <SectionDivider/>
    <br />
    <SectionTitle>
      Progress Reports
    </SectionTitle>
    <br />
    <GridContainer>
      {research_meetings.map((p, i) =>{
        return(
          <Box>
            <Paragraph>
              <strong style={{fontSize: "20px;"}}>{p.title} {p.id}</strong><br />
              <Caption>
                progress report - {p.date}
              </Caption>
              <br />
              <br />
              {p.summary}
            </Paragraph>
          </Box>
        );
      })}
    </GridContainer>
    </Section>
);

export default Meetings;