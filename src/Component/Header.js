import React from "react";
import styled from "styled-components";
import Logo from "../assets/linkmine.png";

export default function Header() {
  return (
    <React.Fragment>
      <NavWrapper>
        <Left>
        <LogoWrapper>
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
            <Signup href="">Sign up</Signup>
            </Auth>
            

        </Right>
      </NavWrapper>
    </React.Fragment>
  );
}

const NavWrapper = styled.div`
  background-color:transparent;
  display: flex;
  padding-top:30px;
  padding-bottom:30px;
  padding-left:30px;
`;
const Left = styled.div`
  display: flex;
  
`;
const Right = styled.div`
  display: flex;
  margin-left:auto;
  a{
      color:var(--mainAsh);
      text-decoration:none;
      padding-left:20px;
      padding-right:20px;
      font-size:14px;
  }
  :active{
      color:var(--mainAsh)
  }
`;

const LogoWrapper = styled.div `
img{
    width:150px;
}
`
const Auth = styled.div `
margin-left:40px;
`

const Login =styled.a `

`
const Signup =styled.a `
background-color:var(--lightBlue);
padding:16px 12px;
color:var(--mainWhite)!important;
`