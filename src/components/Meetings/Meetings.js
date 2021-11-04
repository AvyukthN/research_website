import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { GridContainer, BlogCard, List, ListContainer, ListItem, ListParagraph, ListTitle, Box, Paragraph, Img, Img2, Caption} from './MeetingStyles';
import { research_meetings } from '../../constants/meetings'

const Meetings = () =>  (
  <Section nopadding id="meetings">
    <SectionDivider/>
    <br />
    <SectionTitle>
      Meetings
    </SectionTitle>
    <br />
    <GridContainer>
      {research_meetings.map((p, i) =>{
        return(
          <Box>
            <Paragraph>
              <strong style={{fontSize: "20px;"}}>Meeting {p.id}</strong><br />
              <Caption>
                {p.researcher}
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