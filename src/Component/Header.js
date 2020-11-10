import React from "react";
import styled from "styled-components";
import Logo from "../assets/linkmine.png";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  // const [isOpen, setIsOpen] = useState();

  // const toggle = () => setIsOpen(!isOpen);
  // const [isSmallScreen, setIsSmallScreen] = useState(false);
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("max-width:600px");
  //   mediaQuery.addListener(handleMediaQueryChange);

  //   handleMediaQueryChange(mediaQuery);
  //   return () => {
  //     mediaQuery.removeListener(handleMediaQueryChange);
  //   };
  // }, []);

  // const handleMediaQueryChange = (mediaQuery) => {
  //   if (mediaQuery.matches) {
  //     setIsSmallScreen(true);
  //   } else {
  //     setIsSmallScreen(false);
  //   }
  // };
  return (
    <React.Fragment>
      <NavWrapper>
        <Left>
          <LogoWrapper t0="/">
            <img src={Logo} alt="linkmine logo" />
          </LogoWrapper>
        </Left>

        <Right>
          <a href="https://linkmine.vip/">Home</a>
          <a href="https://linkmine.vip/product-center">Product Center</a>
          <a href="https://linkmine.vip/financial-center">Finacial Center</a>
          <a href="https://linkmine.vip/wallet">Wallet</a>
          <Auth>
            <Login href="">Sign in</Login>
            <Signup href="https://linkmine.vip/auth/register">Sign up</Signup>
          </Auth>
        </Right>
      </NavWrapper>
      <SmallNavWrapper>
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
      </SmallNavWrapper>
    </React.Fragment>
  );
}

const NavWrapper = styled.div`
  background-color: transparent;
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;

  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
  @med

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
`;

const LogoWrapper = styled(Link)`
  img {
    width: 150px;
  }
`;
const Auth = styled.div`
  margin-left: 40px;
`;

const Login = styled.a``;
const Signup = styled.a`
  background-color: var(--lightBlue);
  padding: 16px 12px;
  color: var(--mainWhite) !important;
`;
const SmallNavWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 767.9px) {
    display: block;
    background-color: var(--mainBlue);
  }
`;
