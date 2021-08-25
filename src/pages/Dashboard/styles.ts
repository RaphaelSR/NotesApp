import styled from "styled-components";
import { darken, lighten } from "polished";
import noteImg from "../../assets/noteImg.png";

export const Container = styled.div`
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${lighten(0.02, "#000000")};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 5rem 0 0 2.3125rem;
    color: white;
    font-size: 2.25rem;
  }

  button {
    display: none;
    background-color: #2987dd;
    font-size: 1.125rem;
    height: 3.875rem;
    width: 7.75rem;
    border-radius: 0.5rem;
    color: white;
    border: none;
    margin: 5rem 3rem 0 2.3125rem;

    transition: color 0.2s;

    &:hover {
      color: ${darken(0.4, "#2987dd")};
    }
  }

  @media (max-width: 1280px) {
    button {
      display: block;
    }
  }
`;

export const NotesList = styled.div`
  flex: 1;
  overflow: visible;
  padding-bottom: 2rem;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
  list-style: none;

  @media (max-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const NoteBackground = styled.div`
  background: url(${noteImg});
  height: 21rem;
  width: 20rem;
  margin-left: 2.5rem;
  margin-top: 2.25rem;
  margin-right: 1.2rem;
`;

export const NoteData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #000000;
    font-size: 1.5rem;
    margin-top: 2.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.125;
    margin: 1rem 2rem;
    font-weight: 400;
    text-align: justify;
  }
`;

export const CloseButton = styled.button`
  position: relative;

  left: 18rem;
  top: -0.5rem;

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

export const AddNotes = styled.form`
  background: white;
  margin-top: 6rem;
  max-width: 438px;
  margin: 6rem 3rem;
  position: relative;

  @media (max-width: 1280px) {
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
