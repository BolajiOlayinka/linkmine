import React from "react";
import LargeImage from "../assets/how-it-works.png";
import SmallImage from "../assets/how-it-works-mobile.png";
import styled from "styled-components";

export default function How() {
  return (
    <Wrapper>
      <PreHeader>How We Mine</PreHeader>
      <Header>How It Works?</Header>
      <Large>
        <img src={LargeImage} alt="How Large Screens" />
      </Large>

      <Small>
        <img src={SmallImage} alt="How Small Screen" />
      </Small>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 120px;
`;
const PreHeader = styled.div`
  color: #00a8ff;
  font-size: 18px;
  margin-top: 110px;
  margin-bottom: 20px;
  text-align: center;
`;
const Header = styled.div`
  font-size: 50px;
  color: white;
  text-align: center;
  font-family: MontserratBold;
`;
const Large = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
  img {
    width: 100%;
  }
`;
const Small = styled.div`
  @media (min-width: 576px) {
    display: none;
  }
  img {
    width: 100%;
  }
`;
