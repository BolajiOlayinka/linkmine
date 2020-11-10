import React from "react";
import styled from "styled-components";
import bannerImg from "../assets/try2.png";

export default function Banner() {
  return (
    <React.Fragment>
      <SideTriangle></SideTriangle>
      <Title>One Time Investment Lifetime Earnings</Title>
      <SubTitle>
        BitMining grants you a unique opportunity to discover a brand new
        revenue stream and monetize users through rewarded crypto mining.
      </SubTitle>
      <ImageContent>
        <img src={bannerImg} alt="linkmine" />
      </ImageContent>
    </React.Fragment>
  );
}

const Title = styled.h2`
  color: var(--mainWhite);
  font-size: 80px;
  font-weight: bold;
  width: 90%;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 80px;
  line-height: 1.5;
  text-align: center;
  @media screen and (max-width: 1199px) and (min-width: 992px) {
    font-size: 65px;
    width: 70%;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 991.9px) and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 45px;
  }
  @media screen and (max-width: 767.9px) and (min-width: 576.1px) {
    margin-bottom: 40px;
    font-size: 40px;
  }
  @media (max-width: 576px) {
    font-size: 36px;
  }
  @media (max-width: 425px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;
const SubTitle = styled.p`
  width: 80%;
  color: var(--mainAsh);
  margin: auto;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  @media screen and (max-width: 1199px) and (min-width: 992px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 991.9px) and (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 767.9px) and (min-width: 576.1px) {
    margin-bottom: 40px;
  }
  @media(max-width:576px){
    margin-bottom:40px;
  }
  @media (max-width: 425px) {
    width: 90%;
    font-size: 12px;
    margin-bottom: 20px;
    margin: auto;
  }
`;
const SideTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: 200px solid transparent;
  border-right: 160px solid var(--mainAsh);
  opacity: 6%;
  border-bottom: 200px solid transparent;
  position: absolute;
  right: 0;
  margin-top: 50px;
`;
const ImageContent = styled.div`
  text-align: center;
  img {
    width: 60%;
  }
  @media (min-width: 1200px) {
    padding-top: 60px;
    padding-bottom: 60px;
    img {
      width: 600px;
    }
  }
  @media (max-width: 475px) {
    margin-top: 30px;
  }
`;
