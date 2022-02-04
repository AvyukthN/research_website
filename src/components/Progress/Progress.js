import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { GridContainer, BlogCard, List, ListContainer, ListItem, ListParagraph, ListTitle, Box, Paragraph, Img, Img2, Caption} from './ProgressStyles';
import { research_meetings } from '../../constants/progress'

const Progress = () =>  (
  <Section nopadding id="progress">
    <SectionDivider/>
    <br />
    <SectionTitle>
      Progress Reports
    </SectionTitle>
    <br />
    <GridContainer>
      {research_meetings.map((p, i) =>{
        return(
          <div>
            <Box>
              <Paragraph>
                <strong style={{fontSize: "20px;"}}>Replicating Grovers Search</strong><br />
                <Caption>
                  progress report - 2/2/22
                </Caption>
                <br />
                <br />
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSR1WF2vxoiUf3m5z0Og10gb2LLT3YXdcz-nSv5KFmqONvWIdWh2shjTw0fBgJ1ZXDsYUi65OaceKTk/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
              </Paragraph>
            </Box>
            <Box>
              <Paragraph>
                <strong style={{fontSize: "20px;"}}>{p.title}</strong><br />
                <Caption>
                  progress report - {p.date}
                </Caption>
                <br />
                <br />
                {p.summary}
              </Paragraph>
            </Box>
          </div>
        );
      })}
    </GridContainer>
    </Section>
);

export default Progress;
