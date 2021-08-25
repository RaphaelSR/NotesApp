import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  height: 100vh;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5.5rem;
  margin-left: 3rem;
  margin-right: 3rem;
  
`;

export const CloseButton = styled.button`
  width: 3rem;
  height: 3rem;

  clip-path: circle();

  border: none;
  background: #c4c4c4;
  color: white;

  line-height: 0%;
  font-size: 2rem;

  transition: color 0.2s;

  &:hover {
    display: block;
    color: ${darken(0.4, "#c4c4c4")};
  }
`;

export const Content = styled.form`
  background: white;
  margin-top: 0;
  max-width: auto;
  margin: 1rem 3rem;

  @media (min-width: 1280px) {
    display: none;
  }

  h1 {
    color: black;
    font-size: 1.5rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3.875rem;
    border-radius: 0.25rem;
    border: none;
    background: #f5f5f5;
    font-weight: 400;
    font-size: 1rem;
    margin-top: 1.5rem;

    &::placeholder {
      color: #8f8f8f;
    }
  }
  textarea {
    width: 100%;
    padding: 1.5rem;
    height: 16rem;
    border-radius: 0.25rem;
    border: none;
    background: #f5f5f5;
    font-weight: 400;
    font-size: 1rem;
    margin-top: 1.5rem;
    resize: none;

    &::placeholder {
      color: #8f8f8f;
    }
  }
  button {
    background-color: #2987dd;
    font-size: 1.125rem;
    height: 3.875rem;
    width: 7.75rem;
    border-radius: 0.5rem;
    color: white;
    border: none;
    margin-top: 1.5rem;

    transition: color 0.2s;

    &:hover {
      color: ${darken(0.4, "#2987dd")};
    }
  }
`;
