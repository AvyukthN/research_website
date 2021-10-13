import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, Div3} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:571-535-9544">(571) 535-9544</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:avyukthnilajagi@gmail.com">avyukthnilajagi@gmail.com</LinkItem>
        </LinkColumn>
        <Div3>
          <SocialIcons href="https://github.com/AvyukthN/research">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="mailto:avyukthnilajagi@gmail.com">
            <AiFillMail size="3rem"/>
          </SocialIcons>
        </Div3>
      </LinkList>
      {/* <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Source Code</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/AvyukthN/research">
          <AiFillGithub size="3rem" />
        </SocialIcons>
      </SocialIconsContainer> */}
    </FooterWrapper>
  );
};

export default Footer;
