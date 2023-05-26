import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";


const ContentSection = () => {
 

  return (
    <Wrapper>
      <div className="container grid grid-two-column" style={{marginBottom:"-130px"}}>
        <div className="section-hero-data">
          <h1 className="hero-heading" style={{fontFamily: "Roboto"}}>Student Management System</h1>
          <p className="hero-para" style={{fontFamily: "Roboto"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: red;
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 2.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    padding-left:70px;
  }
  
`;

export default ContentSection;