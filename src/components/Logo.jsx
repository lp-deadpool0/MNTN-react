import React from "react";
import styled from "styled-components";
import logoImg from "../assets/logo.svg";

const StyledLogo = styled.img`
  width: 108px;
  height: 24px;
`;

export const Logo = () => {
  return <StyledLogo src={logoImg}></StyledLogo>;
};
