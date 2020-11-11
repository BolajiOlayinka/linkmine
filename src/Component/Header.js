import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/linkmine.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Nav>
        <NavWrapper>
          <Left>
            <LogoWrapper to="/">
              <img src={Logo} alt="linkmine logo" />
            </LogoWrapper>
          </Left>

          <Right>
            <a href="https://linkmine.vip/">Home</a>
            <a href="https://linkmine.vip/product-center">Product Center</a>
            <a href="https://linkmine.vip/financial-center">Finacial Center</a>
            <a href="https://linkmine.vip/wallet">Wallet</a>
            <Auth>
              <Login href="https://linkmine.vip/auth/login">Sign in</Login>
              <Signup href="https://linkmine.vip/auth/register">Sign up</Signup>
            </Auth>
          </Right>
        </NavWrapper>
        <SmallNavWrapper>
          <Auth>
            <Login href="https://linkmine.vip/auth/login">Sign in</Login>
            <Signup href="https://linkmine.vip/auth/register">Sign up</Signup>
          </Auth>
          <StyledFontAwesomeIcon icon={faBars} onClick={toggle} />
        </SmallNavWrapper>
      </Nav>
      {!isOpen && (
        <SmallRight>
          <a href="https://linkmine.vip/">Home</a>
          <a href="https://linkmine.vip/product-center">Product Center</a>
          <a href="https://linkmine.vip/financial-center">Finacial Center</a>
          <a href="https://linkmine.vip/wallet">Wallet</a>
        </SmallRight>
      )}
    </React.Fragment>
  );
}

const NavWrapper = styled.div`
  background-color: transparent;
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  width: 100%;
  margin: auto;
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
  @media (max-width: 375px) {
    padding-left: 15px;
  }
`;
const Left = styled.div`
  display: flex;
`;
const Right = styled.div`
  display: flex;
  margin-left: auto;
  a {
    color: var(--mainAsh);
    text-decoration: none;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 14px;
  }
  :active {
    color: var(--mainAsh);
  }
  @media (max-width: 767px) {
    display: none;
  }
  @media screen and (max-width: 992px) and (min-width: 768.1px) {
    a {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;
const SmallRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  a {
    color: var(--mainAsh);
    text-decoration: none;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 14px;
  }
  :active {
    color: var(--mainAsh);
  }
  @media (min-width: 768.1px) {
    display: none;
  }
  @media (max-width: 768px) {
    margin-top: -15px;
    padding-left: 20px;
    a {
      padding-left: 10px;
    }
  }

  @media (max-width: 375px) {
    margin-top: -15px;
    padding-left: 5px;
  }
  a {
    padding-bottom: 5px;
    padding-left: 8px;
  }
`;

const LogoWrapper = styled(Link)`
  img {
    width: 150px;
  }
  @media (max-width: 425px) {
    img {
      width: 120px;
    }
  }
`;
const Auth = styled.div`
  margin-left: 40px;
  @media screen and (max-width: 992px) and (min-width: 768.1px) {
    width: 200px;
  }
  @media (max-width: 768px) {
    margin-left: 5px;
    width: 150px;
  }

  @media (max-width: 425px) {
    margin-left: 5px;
    width: 150px;
  }
  @media (max-width: 375px) {
    margin-left: 5px;
    width: 130px;
  }
`;

const Login = styled.a`
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Signup = styled.a`
  background-color: var(--lightBlue);
  padding: 16px 12px;
  color: var(--mainWhite) !important;

  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 12px;

    margin-left: 10px;
  }
`;
const SmallNavWrapper = styled.div`
  margin-left: auto;
  padding-top: 30px;
  padding-right: 30px;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 767.9px) {
    display: flex;
    background-color: var(--mainBlue);
  }
  @media (max-width: 375px) {
    padding-right: 15px;
  }
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: white;
  @media (max-width: 768px) {
    margin-left: 5%;
  }
  @media (max-width: 425px) {
    margin-left: 1%;
  }
`;
const Nav = styled.div`
  display: flex;
`;
