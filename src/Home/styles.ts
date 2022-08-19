import styled from "styled-components";

export const TitleContainer = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  color: #333;
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: start;
  button{
    width: 100%;
    border: none;
    height: 3rem;
    color: white;
    border-radius: 8px;
    background-color: #333;
    font-weight: bold;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
      opacity: 90%;
    }
  }
`

export const Container = styled.div`
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`