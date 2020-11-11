import React from "react";
import styled from "styled-components";
import Tag from "../assets/tag.png";
import goldTag from "../assets/gold-tag.png";
import silverTag from "../assets/silver-tag.png";
import emeraldTag from "../assets/emerald-tag.png";
import topazTag from "../assets/topaz-tag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Models() {
  return (
    <Wrapper>
      <TitleHead>Products</TitleHead>
      <PreHeader>A Great Way to Earn Revenue</PreHeader>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
          <Card>
            <CardImage src={silverTag} alt="featured linkmine" />
            <Price>Price</Price>
            <Amount>$50</Amount>
            <CardTitle>Silver</CardTitle>

            <CardSubTitle>
              Monthly Yield : <b>10%</b>
            </CardSubTitle>
            <CardArrow>
              <FontAwesomeIcon icon={faAngleRight} />{" "}
            </CardArrow>
          </Card>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
          <Card>
            <CardImage src={goldTag} alt="featured linkmine" />
            <Price>Price</Price>
            <Amount>$100</Amount>
            <CardTitle>Gold</CardTitle>

            <CardSubTitle>
              Monthly Yield :<b>10%</b>
            </CardSubTitle>
            <CardArrow>
              <FontAwesomeIcon icon={faAngleRight} />{" "}
            </CardArrow>
          </Card>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
          <Card>
            <CardImage src={Tag} alt="featured linkmine" />
            <Price>Price</Price>
            <Amount>$200</Amount>
            <CardTitle>Jasper</CardTitle>

            <CardSubTitle>
              Monthly Yield : <b>10%</b>
            </CardSubTitle>
            <CardArrow>
              <FontAwesomeIcon icon={faAngleRight} />{" "}
            </CardArrow>
          </Card>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
          <Card>
            <CardImage src={emeraldTag} alt="featured linkmine" />
            <Price>Price</Price>
            <Amount>$350</Amount>
            <CardTitle>Emerald</CardTitle>

            <CardSubTitle>
              Monthly Yield : <b>10%</b>
            </CardSubTitle>
            <CardArrow>
              <FontAwesomeIcon icon={faAngleRight} />{" "}
            </CardArrow>
          </Card>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
          <Card>
            <CardImage src={topazTag} alt="featured linkmine" />
            <Price>Price</Price>
            <Amount>$500</Amount>
            <CardTitle>Topaz</CardTitle>

            <CardSubTitle>
              Monthly Yield : <b>12%</b>
            </CardSubTitle>
            <CardArrow>
              <FontAwesomeIcon icon={faAngleRight} />{" "}
            </CardArrow>
          </Card>
        </div>
        <div className="col-lg-4 col-md-4 align-self-center col-sm-6 col-12">
          <StartContainer>
            <StartButton href="https://linkmine.vip/auth/register" rel="noreferrer" target="_blank">
              {" "}
              Get Started{" "}
              <FontAwesomeIcon className="ml-1" icon={faAngleRight} />
            </StartButton>
          </StartContainer>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 110px;
  background-color: var(--mainBlue);
  padding-bottom: 120px;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (max-width: 767.9px) and (min-width: 575.9px) {
    padding-top: 80px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
  @media (max-width: 425px) {
    padding-left: 15px;
    paddig-right: 15px;
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;
const PreHeader = styled.p`
  color: #00a8ff;
  font-sze: 18px;
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
  @media screen and (max-width: 767.9px) and (min-width: 575.9px) {
    font-size: 40px;
    font-family: Montserrat;
    font-weight: bold;
  }
  @media (max-width: 425px) {
    font-size: 26px;
  }
`;
const Card = styled.div`
  text-align: center;
  background: #1d2577;
  margin-top: 120px;
  height: 180px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;
const CardTitle = styled.div`
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
`;
const CardSubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #c6c9e5;
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
const Price = styled.div`
  position: relative;
  margin-top: -100px;
  font-weight: 400;
  color: white;
`;
const Amount = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  color: white;
`;
