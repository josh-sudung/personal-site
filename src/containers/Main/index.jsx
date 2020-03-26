import React from "react";
import styled from "styled-components";
import Navbars from "../../components/Navbars";
import {FloatingCircle, Circle} from "../../components/FloatingCircle";


const Section = styled.section`

  .child {
    margin:1rem;
  }

  .parent {
    display: flex;
    min-height: 100vh;
  }

  .circle-1 {
    background: #9FD4CA;
    right: auto;
    width: 10%;
    top: 75%;
    bottom: auto;
  }

  .zindex-mod {
    z-index: 2;
    position: relative;
  }

  @media only screen and (min-width: 368px) {
    h1, .h1 {
        font-size: 2.8em;
    }

    h4, .h4 {
      font-size: 1.6em;
    }

    h6, .h6 {
      font-size: 1.25rem;
    }
  }
`;

const Main = () => (
  <div>
    <Navbars />
    <Section>
      <div className="bg-grey parent align-items-center justify-content-center">
        <div className="child text-center">
          <FloatingCircle
            inverted={true}
            style={{
              backgroundColor: '#FFFFFF',
              left: "60%",
              right: "auto",
              width: "0.8vmax",
              top: "25%",
              bottom: "auto"
            }}
          />
          <FloatingCircle
            inverted={false}
            factor={0.009}
            style={{
              backgroundColor: '#FFFFFF',
              left: "10%",
              right: "auto",
              width: "0.8vmax",
              top: "25%",
              bottom: "auto"
            }}
          />
          <FloatingCircle
            inverted={true}
            factor={0.008}
            style={{
              backgroundColor: '#FFFFFF',
              left: "20%",
              right: "auto",
              width: "0.8vmax",
              top: "80%",
              bottom: "auto"
            }}
          />
          <Circle>
            <span 
              className='circle'
              style={{
                backgroundColor: '#FFFFFF',
                left: "70%",
                right: "auto",
                width: "0.8vmax",
                top: "30%",
                bottom: "auto"
              }}
            />
          </Circle>
          <FloatingCircle
            inverted={false}
            style={{
              zIndex: 1,
              backgroundColor: '#1be3db',
              left: "36%",
              right: "auto",
              width: "5vmax",
              top: "37%",
              bottom: "auto"
            }}
          />
          <FloatingCircle
            inverted={true}
            style={{
              zIndex: 0,
              backgroundColor: 'transparent',
              border: '1px dashed',
              left: "35%",
              right: "auto",
              width: "5vmax",
              top: "36%",
              bottom: "auto"
            }}
          />
          <Circle>
            <span 
              className='circle'
              style={{
                backgroundColor: 'transparent',
                border: '1px dashed',
                right: "auto",
                left: "65%",
                width: "10vmax",
                top: "75%",
                bottom: "auto"
              }}
            />
          </Circle>
          <FloatingCircle 
            inverted={false}
            factor={0.008}
            style={{
              backgroundColor: '#1be3db',
              left: "60%",
              right: "auto",
              width: "10vmax",
              top: "75%",
              bottom: "auto"
            }}
          />
          <h1 className="zindex-mod"><span>Hello</span>, I'm <span className="highlight">JOSH</span>!</h1>
          <h5 className="zindex-mod">More to <span className="underline">come</span> ...</h5>
          {/* <h4>
            I am a third-year student majoring Computer Science at the <span className="underline">University of Indonesia</span>
          </h4> */}
        </div>
      </div>
    </Section>
  </div>
);

export default Main;