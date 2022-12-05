import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/bg.png";
import { Header } from "./Header";
import twitterIcon from "../../assets/icons/twit.svg";
import instagramIcon from "../../assets/icons/inst.svg";
import arrowIcon from "../../assets/icons/arrow.svg";
import { Link } from "react-scroll";

const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0px 80px;
`;
const ContainerBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FollowUs = styled.ul`
  display: grid;
  grid-template-columns: 24px;
  grid-template-rows: 75px 1fr 1fr;
  grid-gap: 24px;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  & li:first-child {
    /* transform: rotate(90deg); */
    writing-mode: vertical-lr;
    min-width: 77px;
    min-height: 22px;
  }
  & li {
    width: 24px;
    height: 24px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Offer = styled.div`
  & span {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: #fbd784;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      width: 72px;
      height: 2px;
      background: #fbd784;
      margin-right: 32px;
    }
  }
`;

const Title = styled.h1`
  font-family: "Chronicle Display";
  font-style: normal;
  font-weight: 600;
  font-size: 88px;
  line-height: 100px;
  text-transform: capitalize;
  max-width: 950px;
  margin: 32px 0;
`;

const ScrollBtn = styled.button`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  background: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
  &::after {
    content: "";
    width: 16px;
    height: 24px;
    background: url(${arrowIcon}) center/ cover no-repeat;

    margin-left: 16px;
  }
`;

const PageList = styled.ul`
  font-family: "Gilroy";
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #ffffff;
  margin-right: 32px;

  display: grid;
  grid-template-rows: auto;
  grid-gap: 40px;
  & li {
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const Shadow = styled.div`
  width: 100%;
  height: 700px;
  background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0b1d26 61.38%);
  position: absolute;
  left: 0;
  bottom: -206px;
`;

const StyledHero = styled.div`
  width: 100%;
  height: 100%;
  height: 1694px;
  background: url(${bgImg}) center/ cover no-repeat;
  color: #ffffff;
  position: relative;
`;
const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & * {
    transition: 0.2s;
  }
  & div {
    display: flex;
    justify-content: center;
    align-items: start;
    position: relative;

    &::before {
      content: "";
      transition: 0.2s;

      position: absolute;
      top: ${(props) => props.lineCoords + "px"};
      left: 0;
      width: 3px;
      height: 60px;
      background: #ffffff;
    }
  }

  & span {
    width: 3px;
    height: 240px;
    background: #ffffff;
    opacity: 0.5;
  }
`;

export const Hero = () => {
  const [lineCoords, setLineCoords] = React.useState("0");
  const [prevY, setPrevY] = React.useState(null);

  // const changeCoords = (e) => {
  //   if (prevY === null) {
  //     setPrevY(e.clientY);
  //   } else if (prevY !== null) {
  //     if (prevY > e.clientY) {
  //       setTimeout(console.log("up"), 3000);
  //       console.log(prevY);
  //       setPrevY(e.clientY);
  //     } else if (prevY < e.clientY) {
  //       setTimeout(console.log("down"), 3000);
  //       setPrevY(e.clientY);
  //       console.log(prevY);
  //     }
  //   }
  // };

  const moveLine = (num) => {
    setLineCoords(num);
  };

  return (
    <StyledHero id="start">
      <Container>
        <Header />
        <ContainerBody>
          <FollowUs>
            <li>Follow&nbsp;us</li>
            <li>
              <a href="https://t.me/lp_deadpool">
                <img src={twitterIcon} alt="twitter icon" />
              </a>
            </li>
            <li>
              <a href="https://t.me/lp_deadpool">
                <img src={instagramIcon} alt="twitter icon" />
              </a>
            </li>
          </FollowUs>
          <Offer>
            <span>A Hiking guide</span>
            <Title>Be prepared for the Mountains and beyond!</Title>
            <Link to="first" smooth={true} duration={1000}>
              <ScrollBtn>scroll down</ScrollBtn>
            </Link>
          </Offer>

          <Pages
            onMouseLeave={() => {
              moveLine(0);
            }}
            lineCoords={lineCoords}
          >
            <PageList>
              <li
                onMouseMove={() => {
                  moveLine(0);
                }}
              >
                Start
              </li>
              <Link
                onMouseMove={() => {
                  moveLine(59);
                }}
                to="first"
                smooth={true}
                duration={1000}
              >
                <li>01</li>
              </Link>
              <Link
                onMouseMove={() => {
                  moveLine(59 * 2);
                }}
                to="second"
                smooth={true}
                duration={1000}
              >
                <li>02</li>
              </Link>
              <Link
                onMouseMove={() => {
                  moveLine(59 * 3);
                }}
                to="third"
                smooth={true}
                duration={1000}
              >
                <li>03</li>
              </Link>
            </PageList>

            <div>
              <span></span>
            </div>
          </Pages>
        </ContainerBody>
      </Container>
      <Shadow />
    </StyledHero>
  );
};
