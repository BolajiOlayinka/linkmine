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
`;
const SubTitle = styled.p`
  width: 80%;
  color: var(--mainAsh);
  margin: auto;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
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
  img{
      width:60%;
  }
  @media (min-width: 1200px) {
    padding-top: 60px;
    padding-bottom: 60px;
    img {
      width: 600px;
    }
  }
`;
