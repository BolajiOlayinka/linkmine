import React, { Component } from "react";
import styled from "styled-components";

export default class Earn extends Component {
  constructor() {
    super();
    this.state = {
      number: 1,
      resultBTC: 0.00000871,
      Dollars: 0.14,
      resultDollars: 0.14,
      calcResult: "0.00000871",
    };
  }

  onchangeHandler = (event) => {
    this.setState({
      number: event.target.value,
    });
  };
  calculateBtn = () => {
    this.setState({
      calcResult: (this.state.number * this.state.resultBTC).toFixed(8),
      resultDollars: (this.state.Dollars * this.state.number).toFixed(2),
    });
  };
  render() {
    return (
      <Wrapper>
        <Container>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <EarnTitle>How Much Will I Earn ?</EarnTitle>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-6 col-12 align-self-center">
              <InputSection>
                <StyledInput
                  type="number"
                  placeholder="1"
                  value={this.state.number}
                  onChange={this.onchangeHandler}
                />
                <ThetaDiv>TH/s</ThetaDiv>
                <CalcBtn onClick={this.calculateBtn}>CALCULATE</CalcBtn>
                <Output>
                  <p>Estimated 24 Hour Revenue</p>
                  <CalResult>
                    {this.state.calcResult} (${this.state.resultDollars})
                  </CalResult>
                </Output>
              </InputSection>
            </div>
          </div>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--deepBlue);
  padding-top: 90px;
  padding-bottom: 90px;
  h2 {
    color: var(--mainWhite);
  }
  @media (min-width: 1200px) {
    h2 {
      font-weight: bold;
      font-size: 43px;
    }
  }
`;
const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
`;
const EarnTitle = styled.h2`
  width: 100%
`;
const InputSection = styled.div`
  display: flex;
`;
const StyledInput = styled.input`
  width: 160px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  margin-right: 2px;
  padding-left: 30px;
  background: #1e2472;
  height: 60px;
  line-height: 60px;
  color: #b0b4db;
  border-style: none;
  border-color: transparent;
  border: none;
  :focus {
    border: none !important;
    border-color: transparent !important;
    border-style: none !important;
    box-shadow: none;
  }
  :active {
    border: none !important;
    border-color: transparent !important;
    border-style: none !important;
    box-shadow: none;
  }
`;
const ThetaDiv = styled.div`
  background: #1e2472;
  height: 60px;
  line-height: 60px;
  color: #b0b4db;
  text-align: center;
  width: 200px;
  padding-right: 30px;
  margin-right: -30px;
`;

const CalcBtn = styled.button`
  background: #00a8ff;
  border-radius: 30px;
  border: none;
  color: white;
  padding: 0 40px;
  height: 60px;
  line-height: 60px;
  outline: none;
`;
const Output = styled.div`
 padding-left:30px;
  p {
    font-size: 16px;
    color: #c6c9e5;
  }
  color: white;
`;
const CalResult = styled.div``;
