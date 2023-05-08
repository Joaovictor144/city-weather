import styled from 'styled-components';

export const Container = styled.div`
  div{
    display: grid;
  }
  button{
    background-color: aqua;
    padding: 8px;
    border-radius: 10px;
    border: none;
    opacity: 1;
    transition: opacity 0.5s ease;

    &:hover{
      opacity: 0.5;
    }

    &:active{
      opacity: 0.8;
    }
    &:disabled{
      opacity: 0.8;
      background-color: darkgray;
    }
  }
  .clear{
    margin: 10px 0;
    background-color: red;
  }
`;

export const Label = styled.label`
  font-size: 1.5rem;
  margin: 10px 0;
  select{
    margin-left: 5px;
    background-color: aqua;
    padding: 3px;
    text-shadow: 0.5px 0.5px 0.5px #000000;
    border: none;
  }
`;