import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { Link } from "react-scroll";

const Wrapper = styled.footer`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto;
  max-width: 1542px;
  margin: 0 auto;
  padding-bottom: 120px;
`;
const Descript = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  margin-top: 24px;
  color: #ffffff;
  max-width: 303px;
`;
const Info = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  /* identical to box height, or 178% */
  position: absolute;
  left: 0;
  bottom: 0;
  color: #ffffff;

  opacity: 0.5;
`;

const Title = styled.h1`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #fbd784;
  margin-bottom: 24px;
`;

const List = styled.ul`
  display: grid;
  grid-gap: 16px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;

  & li {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Section = styled.div`
  position: relative;
`;
export const Footer = () => {
  return (
    <Wrapper>
      <Section>
        <Link to="start" smooth={true} duration={1000}>
          <Logo />
        </Link>
        <Descript>
          Get out there & discover your next slope, mountain & destination!
        </Descript>
        <Info>Copyright 2019 MNTN, Inc. Terms & Privacy</Info>
      </Section>

      <div>
        <Title>More on The Blog</Title>
        <List>
          <li>About MNTN</li>
          <li>Contributors & Writers</li>
          <li>Write For Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </List>
      </div>
      <div>
        <Title>More on MNTN</Title>
        <List>
          <li>The Team</li>
          <li>Jobs</li>
          <li>Press</li>
        </List>
      </div>
    </Wrapper>
  );
};
