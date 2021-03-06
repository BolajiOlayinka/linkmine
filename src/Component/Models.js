import React from "react";
import styled from "styled-components";
import Feature1 from "../assets/feature-1.png";
import Feature2 from "../assets/feature-2.png";
import Feature3 from "../assets/feature-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Models() {
  return (
    <Wrapper>
      <PreHeader>An Entirely New Way To Earn Revenue</PreHeader>
      <TitleHead>Help You Get The Profit Arising From Bitcoin</TitleHead>
      <Container>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <Card>
              <CardImage src={Feature1} alt="featured linkmine" />
              <CardTitle>Multiple Income Models</CardTitle>
              <CardSubTitle>
                Users have a variety of revenue models to choose from, starting
                with as low as $50
              </CardSubTitle>
              <CardArrow>
                <FontAwesomeIcon icon={faAngleRight} />{" "}
              </CardArrow>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <Card>
              <CardImage src={Feature2} alt="featured linkmine" />
              <CardTitle>Rewarded Experience</CardTitle>
              <CardSubTitle>
                Users can get valuable rewards by mining and introducing new
                users
              </CardSubTitle>
              <CardArrow>
                <FontAwesomeIcon icon={faAngleRight} />{" "}
              </CardArrow>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 ">
            <Card>
              <CardImage src={Feature3} alt="featured linkmine" />
              <CardTitle>High level Profit Margin</CardTitle>
              <CardSubTitle>
                Users can gain as high as 12% profit on their investment
              </CardSubTitle>
              <CardArrow>
                <FontAwesomeIcon icon={faAngleRight} />{" "}
              </CardArrow>
            </Card>
          </div>
        </div>
      </Container>
      <StartContainer>
        <StartButton href="https://linkmine.vip/auth/register" rel="noreferrer" target="_blank">
          {" "}
          Get Started <FontAwesomeIcon className="ml-1" icon={faAngleRight} />
        </StartButton>
      </StartContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 110px;
  background-color: var(--mainBlue);
  padding-bottom: 120px;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
  @media screen and (max-width: 991.9px) and (min-width: 768px) {
    padding-bottom: 40px;
  }
  @media (max-width: 425px) {
    padding-top: 80px;
    padding-bottom: 80px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;
const PreHeader = styled.p`
  color: #00a8ff;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;
const TitleHead = styled.h2`
  font-size: 50px;
  color: white;
  text-align: center;
  font-family: MontserratBold;
  @media (max-width: 425px) {
    font-size: 26px;
  }
  @media screen and (max-width: 1199px) and (min-width: 992px) {
    width: 85%;
    margin: auto;
  }
  @media screen and (max-width: 991.9px) and (min-width: 768px) {
    font-family: Montserrat;
    font-size: 45px;
    font-weight: bold;
  }
  @media screen and (max-width: 767.9px) and (min-width: 575.9px) {
    font-family: Montserrat;
    font-size: 40px;
    font-weight: bold;
  }
  @media screen and (max-width: 576px) {
    font-size: 36px;
  }
`;
const Card = styled.div`
  text-align: center;
  background: #1d2577;
  margin-top: 120px;
  height: 220px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (max-width: 1199px) and (min-width: 992px) {
    height: 300px;
  }
  @media screen and (max-width: 991.9px) and (min-width: 768px) {
    margin-right: 0px;
    margin-left: 0px;
    height: 280px;
  }
  @media(max-width:767.9px){
    height:260px;
  }
`;
const Container = styled.div`
  @media screen and (max-width: 767.9px) and (min-width: 575.9px) {
    width: 80%;
    margin: auto;
  }
`;
const CardTitle = styled.div`
  font-size: 24px;
  color: white;
  margin-bottom: 20px;

  @media screen and (max-width: 1199px) and (min-width: 992px) {
    height: 70px;
  }
`;
const CardSubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #c6c9e5;
  height: 80px;
  @media(min-width:1200px){
    height: 42px;
  }
  @media screen and (max-width: 1199px) and (min-width: 992px) {
    height: 90px;
  }
  @media screen and (max-width: 991.9px) and (min-width: 768px) {
    height: 65px;
  }
  @media(max-width:375px) {
    height: 50px;
  }
`;
const CardImage = styled.img`
  margin-top: -80px;
  margin-bottom: 20px;
`;
const CardArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #242d83;
  color: #c6c9e5;
  width: 40px;
  height: 40px;
  margin: auto;
  position: relative;
  top: 22px;
  border-radius: 50%;
`;
const StartContainer = styled.div`
  text-align: center;
  margin-top: 80px;
  @media screen and (max-width: 991.9px) and (min-width: 768px) {
    margin-top: 120px;
  }
`;
const StartButton = styled.a`
  background: #00a8ff;
  border-radius: 30px;
  border: none;
  color: white;
  padding: 20px 40px;
  height: 60px;
  line-height: 60px;
  outline: none;

  :hover {
    text-decoration: none;
    background-color: #00a8ff;
  }
`;
