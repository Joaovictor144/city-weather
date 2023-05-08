import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ContainerProps{
  widthScreen: number;
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-rows: 1fr 5fr;
  align-items: center;
  width: calc(${props=> (props.widthScreen - 100)+`px`});
`;

export const Head = styled.div`
  text-align: center;
  
`;

export const Main = styled.div`
  display: grid;
  height: 100%;
  align-items: center;
  align-items: center;
  justify-content: center;
  
`;

export const Button = styled(Link)`
  background-color: aqua;
  padding: 10px 25px;
  border-radius: 10px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 18px;
  text-shadow: 0.5px 0.5px 0.5px #000000;
  opacity: 1;
  transition: opacity 0.5s ease;
  text-align: center;
  text-decoration: none;
  
  &:hover{
    opacity: 0.5;
  }

  &:active{
    opacity: 0.8;
  }
`;