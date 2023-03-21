import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    background: transparent;
  }
  html, body {
    margin: 0;
    font-style: normal;
    font-family: Roboto-Regular;
    font-weight: normal;
    height: 100%;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Card = styled.div`
  width: 350px;
  padding: 40px;
  box-shadow: rgb(200 200 200 / 50%) 0px 1px 2px 1px;;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: rgb(124 ,124, 124);
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 100%;
  text-align: center;
`;

const Button = styled.button<{
  disabled?: boolean;
}>`
  background-color: rgba(255, 99, 66, 1);
  padding: 15px;
  border-radius: 5px;
  color: #fff;
  width: 150px;
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
  cursor: pointer;

  ${props => props.disabled && `
    background-color: rgba(255, 99, 66, 0.3);
    cursor: default;
  `}
`;

const Styles = {
  AppWrapper,
  Card,
  Title,
  Text,
  Form,
  Button
};

export default Styles;