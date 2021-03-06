import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

export default class Earn extends Component {
  constructor() {
    super();
    this.state = {
      number: 1,
      resultBtc: 0.00000871,
      Naira: 68.49,
      resultNaira: 68.49,
      calcResult: 0.00000871,
    };
  }

  onchangeHandler = (event) => {
    this.setState({
      number: event.target.value,
    });
  };

  calculateBtn = () => {
    this.setState({
      calcResult: (this.state.number * this.state.resultBtc).toFixed(8),
      resultNaira: (this.state.Naira * this.state.number).toFixed(2),
    });
  };
  componentDidMount = () => {
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_CUR_KEY}&ids=BTC`
      )
      .then((res) => {
        let btcInNaira = res.data["0"]["price"] * 500;
        const hashBTC = (68.49 / btcInNaira).toFixed(8);
        this.setState({
          BTCprice: btcInNaira,
          calcResult: hashBTC,
          resultBtc: hashBTC,
        });
      })
      .catch((res) => {
        console.log(res.err);
      });
  };
  calcHash = () => {};
  render() {
    return (
      <Wrapper>
        <Container>
          <div className="row">
            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
              <EarnTitle>How Much Will I Earn ?</EarnTitle>
            </div>
            <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 align-self-center">
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
                    {this.state.calcResult} BTC (₦ {this.state.resultNaira})
                  </CalResult>
                </Output>
              </InputSection>
              <SmallOutput>
                <p>Estimated 24 Hour Revenue</p>
                <CalResult>
                  {this.state.calcResult} BTC (₦ {this.state.resultNaira})
                </CalResult>
              </SmallOutput>
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
  @media (max-width: 425px) {
    padding-top: 30px;
    padding-bottom: 30px;
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
  width: 100%;

  @media (max-width: 425px) {
    width: 70%;
    text-align: center;
    margin-bottom: 10px;
    margin: auto;
    font-weight: bold;
  }
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    padding-bottom: 20px;
    text-align: center;
  }
  @media screen and (max-width: 768px) and (min-width: 575.9px) {
    font-weight: bold;
    padding-bottom: 20px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 36px;
    width: 70%;
    margin: auto;
    font-weight: bold;
    text-align: center;
    padding-bottom: 20px;
  }
  @media (max-width: 425px) {
    font-size: 30px;
    width: 90%;
    padding-top: 30px;
  }
`;
const InputSection = styled.div`
  display: flex;
  @media (max-width: 425px) {
    margin-top: 30px;
  }
  @media (max-width: 1199px) {
    width: 70%;
    margin: auto;
  }
  @media (max-width: 992px) {
    width: 90%;
    margin: auto;
  }
  @media (max-width: 576px) {
    width: 90%;
    margin: auto;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
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
  @media (max-width: 768px) {
    width: 50px;
  }
  @media (max-width: 576px) {
    width: 30%;
  }

  @media (max-width: 425px) {
    width: 120px;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
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
  @media (max-width: 425px) {
    height: 50px;
    line-height: 50px;
    font-size: 12px;
  }
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
  @media (max-width: 425px) {
    padding: 0 30px;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
  }
`;
const Output = styled.div`
  padding-left: 30px;
  p {
    font-size: 16px;
    color: #c6c9e5;
  }
  color: white;
  @media (max-width: 576px) {
    display: none;
  }
`;
const SmallOutput = styled.div`
  color: white;
  margin-top: 10px;
  text-align: center;
  p {
    font-size: 12px;
    color: #c6c9e5;
  }
  @media (min-width: 575.9px) {
    display: none;
  }
`;
const CalResult = styled.div``;
