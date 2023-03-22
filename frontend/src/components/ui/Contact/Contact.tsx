import React from "react";
import styled from "styled-components";
import { IconSend } from "@tabler/icons-react";
import variables from "@/styles/GlobalStyles.module.scss";
import Info from "./Info";

const SContact = styled.section`
  max-width: 1440px;
  margin: 0 auto 60px auto;
  color: ${variables.gray5};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 120px;
  @media (max-width: 900px) {
    max-width: 100%;
    padding: 0 60px;
  }
`;

const SWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${variables.gray10};
  border-radius: 1rem;
  padding: 3rem;
`;

const STitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: 500;
  color: ${variables.gray1};
`;

const SFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const SForm = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 50%;
  grid-gap: 1rem;
  @media (max-width: 900px) {
    width: 100%;
    grid-gap: 0.5rem;
  }
`;

const SLabel = styled.label`
  grid-column: span 2;
  display: flex;
  align-items: center;
  color: ${variables.gray1};
  @media (max-width: 900px) {
    grid-column: span 6;
  }
`;

const SInput = styled.input`
  grid-column: span 4;
  padding: 0.5rem 0.8rem;
  outline: none;
  border-radius: 22px;
  border: 1px solid ${variables.gray5};
  background-color: transparent;
  color: ${variables.gray5};
  font-family: inherit;
  @media (max-width: 900px) {
    grid-column: span 6;
    margin-bottom: 0.5rem;
  }
`;

const STextarea = styled.textarea`
  grid-column: span 4;
  padding: 0.5rem 0.8rem;
  outline: none;
  border-radius: 22px;
  border: 1px solid ${variables.gray5};
  background-color: transparent;
  color: ${variables.gray5};
  font-family: inherit;
  resize: none;
  @media (max-width: 900px) {
    grid-column: span 6;
    margin-bottom: 0.5rem;
  }
`;

const SButton = styled.button`
  grid-column: 3 / span 4;
  border-radius: 100000px;
  background-color: ${variables.primary};
  border: none;
  outline: none;
  color: white;
  padding: 0.5rem 0.8rem;
  font-family: inherit;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  :hover {
    background-color: ${variables.primaryDark};
  }
  @media (max-width: 900px) {
    grid-column: auto / span 6;
  }
  svg {
    margin-left: 0.25rem;
    width: 1rem;
    height: 1rem;
  }
`;

function Contact() {
  return (
    <SContact>
      <SWrapper>
        <STitle>Get in touch</STitle>
        <SFlex>
          <SForm>
            <SLabel>Name</SLabel>
            <SInput type="text" placeholder="Name" />
            <SLabel>Email</SLabel>
            <SInput type="email" placeholder="Email" />
            <SLabel>Message</SLabel>
            <STextarea rows={8} />
            <SButton>
              <span>Send</span>
              <IconSend />
            </SButton>
          </SForm>
          <Info />
        </SFlex>
      </SWrapper>
    </SContact>
  );
}

export default Contact;
