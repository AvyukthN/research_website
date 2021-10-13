import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Box, Paragraph, ImgBox} from './ResearcherStyles.js';
import { Section, SectionDivider, SectionTitle, Image} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const people = [
  {
  'name': 'Avyukth Nilajagi',
  'position': 'Researcher & Student',
  'school': 'Academies of Loudoun',
  'location': 'United States of America',
  'image': 'https://astero.vercel.app/images/profile/d_writer.png',
  'id': 0
  },
  {
  'name': 'Duke M. Writer',
  'position': 'Research Mentor',
  'school': 'Academies of Loudoun',
  'location': 'United States of America',
  'image': 'https://astero.vercel.app/images/profile/d_writer.png',
  'id': 1
  }
];

const ContactUs = () => {
  return (
    <Section nopadding id="contactus">
      <SectionDivider />
      <SectionTitle main>Contact Us</SectionTitle>
      <GridContainer>
        {people.map((person) => (
          <BlogCard key={person.id}>
            <Img src={person.image} />
            <TitleContent>
              <HeaderThree title>{person.name}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>
              {person.position}<br/>
              {person.school}<br/>
              {person.location}<br/><br/>
            </CardInfo>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);
  );
};

export default ContactUs;