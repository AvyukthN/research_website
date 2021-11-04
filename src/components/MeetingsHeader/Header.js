import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () =>  (
  // <Container> tag contains the nav bar stuff
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '30px'}}>
          <DiCssdeck size="3rem" /> <Span>QAStar</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/#abstract">
          <NavLink>Abstract</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#background">
          <NavLink>Background</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#method">
          <NavLink>Method</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#results">
          <NavLink>Results</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#contactus">
          <NavLink>Contact Us</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#meetings">
          <NavLink>Meetings</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#progress">
          <NavLink>Meetings</NavLink>
        </Link>
      </li>
    </Div2>
    {/* <Div2>
      <li>
        <Link href="#abstract">
          <NavLink>Abstract</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#background">
          <NavLink>Background</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#method">
          <NavLink>Method</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#results">
          <NavLink>Results</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contactus">
          <NavLink>Contact Us</NavLink>
        </Link>
      </li>
    </Div2> */}
    {/* <Div3>
      <SocialIcons href="https://github.com/AvyukthN/research">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="mailto:avyukthnilajagi@gmail.com">
        <AiFillMail size="3rem"/>
      </SocialIcons>
    </Div3> */}
  </Container>
);

export default Header;
