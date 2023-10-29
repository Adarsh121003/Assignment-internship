import React, { useState } from 'react';
import styled from "styled-components";
import Button from "./components/Button";

import Input from './components/Input';
import { NavLink } from 'react-router-dom';


const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;

  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;
const LoginText = styled.h2`
  margin: 3rem 0 2rem 0;
  
letter-spacing: 0.1rem !important;
font-family: Arial, sans-serif;
font-size: 40px;
font-weight: bold;
font-style: italic;
text-shadow: 2px 2px 4px #333;



`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 5rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
  margin-top: 0%;
  letter-spacing: 0 !important;
  text-transform: none !important;
  font-size:20px
`;

const Customcont = styled.div`
margin-top:5%;
display:flex;
flex-direction: column;
align-items: center;
`;
const Setlebel = styled.label`
margin-right:65%;
margin-top: 3%;
margin-bottom: 1%;
text-transform: none !important;
font-family: Arial, sans-serif;
font-weight: bold;
letter-spacing: 0.1rem !important;
`;
const ShowHideButton = styled.button`
  position: absolute;
  top: 31%;
  right: 60px;
  transform: translateY(-50%);
  border: none;
  background: none;
  cursor: pointer;
`;
const InputCheckBox = styled.input`



`;
const InputLabel = styled.label`
margin-right: 60%;
margin-top:3%;
text-transform: none !important;
font-family: Arial, sans-serif;
font-weight: bold;
letter-spacing: 0 !important;
display:flex;
flex-direction: row;
@media screen and (max-width: 768px) {
  margin-right: 45%; 
  margin-top: 4%; 
  font-weight: normal; 
  letter-spacing: 0px; 
  flex-direction: column; 
  display:flex;
flex-direction: row;
font-family: Arial, sans-serif;
font-weight: bold;
}
`;





function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Customcont>

      <MainContainer>
        <LoginText>Login</LoginText>

        <InputContainer>
          <Setlebel>Login Id</Setlebel>
          <Input type="text" placeholder="Email" />
          <Setlebel>Password</Setlebel>

          <Input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <ShowHideButton onClick={handleTogglePassword}>
            {showPassword ? 'Hide' : 'Show'}
          </ShowHideButton>
          <InputLabel ><InputCheckBox type="checkbox" />
            Remember me</InputLabel>
          <InputLabel ><InputCheckBox type="checkbox" />
            Agree to <NavLink to="#" >T & C</NavLink> </InputLabel>


        </InputContainer>


        <ButtonContainer>
          <Button content="Log In" />
        </ButtonContainer>
        <LoginWith><NavLink to="#" >Click Here</NavLink>  To Signup</LoginWith>
      </MainContainer>
    </Customcont >
  )
}

export default Login