import React from "react";
import styled from "styled-components";
import { Logo } from "../Logo";
import accontIcon from "../../assets/icons/account.svg";

const StyledHeader = styled.header`
  padding-top: 64px;
  display: flex;
  justify-content: space-between;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 198px;
`;

const Links = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: 1fr;
  grid-gap: 40px;
  & li:hover {
    opacity: 0.8;
  }
`;

const SignIn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
  &::before {
    content: "";
    background: url(${accontIcon}) center/ cover no-repeat;
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Links>
        <li>
          <a href="https://t.me/lp_deadpool">Equipment</a>{" "}
        </li>
        <li>
          <a href="https://t.me/lp_deadpool">About us</a>{" "}
        </li>
        <li>
          <a href="https://t.me/lp_deadpool">Blog</a>{" "}
        </li>
      </Links>
      <SignIn href="https://t.me/lp_deadpool">Account</SignIn>
    </StyledHeader>
  );
};
