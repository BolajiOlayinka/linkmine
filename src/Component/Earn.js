import React, { Component } from 'react'
import styled from "styled-components";



export default class Earn extends Component {
    constructor(){
        super()
        this.state={
            number:""
        }
        
    }
   
    onchangeHandler=(event)=>{
        this.setState({
          number:event.target.value
        })
    }
    render() {
        return (
            <Wrapper>
            <Container>
              <div className="row">
                
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <h2>How Much Will I Earn ?</h2>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-6 col-12">
                      <InputSection>
                        <input type="number" placeholder="1" value={this.state.number} onChange={this.onchangeHandler}/>
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
  @media(min-width:1200px){
      h2{
          font-weight:bold;
          font-size:44px;
      }
  }
`;
const Container = styled.div `

padding-left:15px;
padding-right:15px;
@media(min-width:1200px){
    width:1200px;
    margin:auto;
}
`
const InputSection = styled.div `
display:flex;
`
