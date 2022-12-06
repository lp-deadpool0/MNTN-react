import React from "react";
import styled from "styled-components";
import arrow from "../assets/icons/arrow2.svg";

const Wrapper = styled.div`
  max-width: 1542px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.padding && "padding-bottom: 200px;"};
  top: -240px;
`;
const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  max-width: 632px;
  grid-gap: 27px;
  position: relative;
  margin-right: 114px;

  ${(props) =>
    props.turn == true ? "margin-left: 264px;" : "margin-right: 114px;"}

  &::before {
    content: "${(props) => props.count}";
    position: absolute;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 240px;
    line-height: 240px;
    color: #ffffff;
    opacity: 0.1;
    top: -103px;
    left: -150px;
  }
`;

const SubTitle = styled.span`
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
`;

const Title = styled.h2`
  font-family: "Chronicle Display";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 77px;
  color: #ffffff;
`;

const Descript = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;
`;

const More = styled.a`
  font-family: "Gilroy";
  font-size: 18px;
  line-height: 22px;
  color: #fbd784;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &::after {
    content: "";
    background: url(${arrow}) center/ cover no-repeat;
    margin-left: 16px;
    width: 24px;
    height: 16px;
  }
`;

const Image = styled.div`
  height: 720px;
  width: 566px;
`;

export const Section = (props) => {
  return (
    <Wrapper id={props.id} padding={props.padding}>
      {props.turn ? (
        <>
          <Image>
            <img src={props.imgPath} alt="Mountains" />
          </Image>
          <Info turn={props.turn} count={props.count}>
            <SubTitle>{props.subTitle}</SubTitle>
            <Title>{props.title}</Title>
            <Descript>{props.children}</Descript>
            <More href="https://t.me/lp_deadpool" target="_blank">
              read more
            </More>
          </Info>
        </>
      ) : (
        <>
          <Info turn={props.turn} count={props.count}>
            <SubTitle>{props.subTitle}</SubTitle>
            <Title>{props.title}</Title>
            <Descript>{props.children}</Descript>
            <More href="https://t.me/lp_deadpool" target="_blank">
              read more
            </More>
          </Info>
          <Image>
            <img src={props.imgPath} alt="Mountains" />
          </Image>
        </>
      )}
    </Wrapper>
  );
};
