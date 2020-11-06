import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Banner from './Banner';
import Earn from './Earn';
import Models from './Models';
import How from './How';
import Plan from './Plan';

export default function Home() {
  return (
      <React.Fragment>   <Container>
      <Header />
      <Banner/>
      
    </Container>
    <Earn/>
    <Models/>
    <How/>
    <Plan/>
    </React.Fragment>
 
  );
}

const Container = styled.div`
  background-color: var(--mainBlue);
  @media(min-width:1200px){
      width:1200px;
      margin:auto;
  }
`;
