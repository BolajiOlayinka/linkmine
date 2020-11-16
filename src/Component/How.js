import React, { useState } from "react";
import LargeImage from "../assets/how-it-works.png";
import SmallImage from "../assets/how-it-works-mobile.png";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default function How() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Wrapper>
      <PreHeader>How We Mine</PreHeader>
      <Header>How It Works?</Header>
      <Large>
        <img src={LargeImage} alt="How Large Screens" />
        <ProductVideoButton>
          <VideoButton onClick={toggle}>
            <FontAwesomeIcon className="mr-3" icon={faPlayCircle} />
            Play Explainer Video
          </VideoButton>
        </ProductVideoButton>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}></ModalHeader>
          <ModalBody>
            <div
              className="video"
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0,
              }}
            >
              <iframe
                title="youtube"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src="https://youtube.com/embed/I1XjhcwOs1U?autoplay=1&mute=1"
                
                frameBorder="0"
              />
            </div>
          </ModalBody>
        </Modal>
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
  @media (max-width: 425px) {
    padding-bottom: 80px;
  }
  @media screen and (max-width: 991.9px) and (min-width: 768px) {
    padding-bottom: 40px;
  }
`;
const PreHeader = styled.div`
  color: #00a8ff;
  font-size: 18px;
  margin-top: 110px;
  margin-bottom: 20px;
  text-align: center;
  @media screen and (max-width: 767.9px) and (min-width: 575.9px) {
    margin-top: 50px;
  }
  @media (max-width: 425px) {
    margin-top: 80px;
    font-size: 12px;
  }
`;
const Header = styled.div`
  font-size: 50px;
  color: white;
  text-align: center;
  font-family: MontserratBold;
  @media screen and (max-width: 767.9px) and (min-width: 575.9px) {
    font-size: 40px;
    font-weight: bold;
    font-family: Montserrat;
  }
  @media (max-width: 425px) {
    font-size: 26px;
  }
`;
const Large = styled.div`
  text-align: center;
  @media (min-width: 1200px) {
    width: 1300px;
    margin: auto;
    img {
      width: 1300px !important;
      margin: auto;
      margin-bottom: 50px;
    }
  }
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
const ProductVideoButton = styled.div`
  width: 50%;
  margin: auto;
  @media screen and (max-width: 1199px) and (min-width: 992px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 991.9px) and (min-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 425px) {
    width: 100%;
    text-align: center;
    margin: auto;
  }
`;
const VideoButton = styled.button`
  width: 300px;
  padding: 2% 3%;
  height: 60px;
  border-radius: 30px;
  border: none;
  background-color: #00a8ff;
  color: white;
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
  @media screen and (max-width: 767.9px) {
    background: #00a8ff;
    border-radius: 30px;
    border: none;
    color: white;
    margin-top: 30px;
    height: 60px;

    outline: none;

    :hover {
      text-decoration: none;
      background-color: #00a8ff;
    }
  }
  @media (max-width: 425px) {
    width: 90%;
    margin: auto;
  }
  @media (min-width: 1200px) {
    padding: 20px 40px;
    border-radius: 30px;
    font-size: 16px;
    width: 300px;
  }
  @media only screen and (max-width: 1200px) and (min-width: 768px) {
    border-radius: 2px;
    font-size: 14px;
    width: 300px;
    padding: 2% 3%;
    height: 60px;
    border-radius: 30px;
  }
`;
