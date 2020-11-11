import React from "react";
import styled from "styled-components";
import TelegramIcon from "../assets/Telegram.png";
import Logo from "../assets/linkmine.png";
import animateScrollTo from "animated-scroll-to";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Telegram() {
  const Scroll = () => {
    animateScrollTo(0);
  };

  return (
    <React.Fragment>
      <SemiCircle></SemiCircle>
      <Wrapper>
        <TelegramImage src={TelegramIcon} alt="Telegram Icon" />
        <SectionOne>
          <p>Join Our Telegram Group to Connect with other Miners</p>
          <h2>Join to Get Access to Latest Information </h2>
        </SectionOne>
        <SectionTwo>
          <TelegramButton href="https://t.me/linkmineafrica">
            {" "}
            Join{" "}
          </TelegramButton>
        </SectionTwo>
      </Wrapper>
      <QualityMining>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h2>
              Explore Quality Mining Technology{" "}
              <span style={{ color: "#00a8ff" }}>#Bitcoin</span>
            </h2>
            <LeftParagraph>
              We have developed a user-friendly, non-disruptive algorithm for
              mining cryptocurrency that provides an excellent user experience
              to keep users happy.
            </LeftParagraph>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <RightParagraph>
              Unlike other existing cross-platform solutions on the market, our
              technology is based on native mining: it supports lots of mobile
              device architectures to provide you with the most effective mining
              tool.As a result, AirMining consumes less power, works faster and
              shows higher performance.
            </RightParagraph>
            <ButtonContainer>
            <StartButton href="#">Get Started Now</StartButton>
            </ButtonContainer>
            
          </div>
        </div>
      </QualityMining>
      <Footer>
        <img src={Logo} alt="Logo" />
        <p>
          Founded in May 2018, it is a bitcoin mining service platform with
          innovative technology as the core. We hope that through our
          professional and reliable service and support, every user who loves
          bitcoin can establish a link with bitcoin through the lowest cost and
          the most stable way.
        </p>
        <ScrollUp onClick={Scroll}>
          {" "}
          <FontAwesomeIcon icon={faAngleUp} />
        </ScrollUp>
      </Footer>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  background-image: linear-gradient(
    90deg,
    #00e9ff 0%,
    #172086 0%,
    #0083ff 100%
  );
  display: flex;
  vertical-align: center;
  align-items: center;
  border-radius: 4px;
  position: relative;
  padding: 90px;
  display: flex;

  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    padding-top: 60px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 60px;
  }
 
`;
const TelegramImage = styled.img`
  opacity: 5%;
  position: absolute;
  width: 250px;
  height: 250px;
`;
const SectionOne = styled.div`
  p {
    font-size: 18px;
    margin-bottom: 20px;
    color: white;
  }
  h2 {
    font-size: 40px;
    color: white;
    font-weight: bold;
    width: 70%;
    line-height: 52px;
  }
  @media (max-width: 425px) {
    p {
      font-size: 16px;
      line-height: 22px;
      text-align:center;
      width:80%;
      margin:auto;
      padding-bottom:30px;
    }
    h2 {
      font-size: 28px;
      line-height: 36px;
      width: 100%;
      padding-bottom: 50px;
      text-align:center;
    }
  }
`;
const SectionTwo = styled.div``;
const TelegramButton = styled.a`
  background-color: var(--mainBlue);
  color: white;
  border-radius: 30px;
  border: none;
  color: white;
  padding: 20px 60px;
  height: 60px;
  line-height: 60px;
  outline: none;
  z-index: 5;
  :hover {
    color: white;
    text-decoration: none;
  }
  @media (max-width: 425px) {
    position: relative;
    z-inidex: 5;
  }
`;
const QualityMining = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }

  h2 {
    font-size: 40px;
    color: white;
    font-weight: bold;
  }
  @media (max-width: 425px) {
    padding-bottom: 30px;
    h2 {
      font-size: 30px;
      line-height: 42px;
    }
  }
`;
const LeftParagraph = styled.div`
  color: white;
  font-size: 16px;
  margin-top: 30px;
  @media (max-width: 425px) {
    font-size: 14px;
    line-height: 26px;
  }
`;
const RightParagraph = styled.div`
  line-height: 2;
  margin-bottom: 30px;
  font-size: 14px;
  color: white;
`;
const ButtonContainer = styled.div `
text-align:center;
`
const StartButton = styled.a`
  background: #00a8ff;
  border-radius: 30px;
  border: none;
  color: white;
  padding: 20px 40px;
  height: 60px;
  line-height: 60px;
  outline: none;
`;
const SemiCircle = styled.div`
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: white;
  opacity: 0.06;
  position: absolute;
  margin-top: 320px;
  margin-left: -350px;
`;
const Footer = styled.div`
  background: #151a58;
  padding-top: 100px;
  padding-bottom: 30px;
  margin-top: 100px;
  text-align: center;

  img {
    width: 210px;
    margin-bottom: 50px;
  }
  p {
    color: white;
    text-align: justify;
    font-size: 16px;
    width: 58%;
    margin: auto;
  }
  @media (max-width: 425px) {
    p {
      width: 90%;
      font-size: 14px;
      line-height: 20px;
      margin: auto;
      text-align: justify;
      padding-bottom: 30px;
    }
  }
`;
const ScrollUp = styled.button`
  background-color: var(--lightBlue);
  display: flex;
  align-items: center;
  color: white;

  margin: auto;
  margin-top: 10px;
  height: 30px;
  border-color: transparent;
  border: none;
  outline: 0;
  :active {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }
  :focus {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }
`;
