import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: aqua;
  text-shadow: 0.3px 0.3px 0.2px #000000;
  border: none;
  opacity: 1;

  &:hover{
    opacity: 0.5;
  }

  &:active{
    opacity: 0.8;
  }
`;