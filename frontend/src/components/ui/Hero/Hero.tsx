import React from 'react';
import styled from 'styled-components';
import variables from '../../../styles/GlobalStyles.module.scss';
import Icons from './Icons.tsx';

const SHero = styled.div`
  color: ${variables.gray5};
  padding: 5rem;
  background-color: ${variables.gray11};
  min-height: 70vh;
  position: relative;
`;

const SSection = styled.section`
  position: absolute;
  top: 5rem;
  left: 5rem;
  width: 100%;
  height: calc(100% - 10rem);
  max-width: min(50rem, 60%);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const STitle = styled.h1`
  font-size: 4rem;
  line-height: 1;

  #accent {
    color: ${variables.primary};
  }
`;

const SDescription = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
  color: ${variables.gray6};
`;

function Hero() {
  return (
    <SHero>
      <Icons />
      <SSection>
        <STitle>Hi,</STitle>
        <STitle>I am <span id="accent">Maciej Kurzak</span></STitle>
        <SDescription>
          Junior Frontend Engineer with a passion for building web applications
          using modern technologies such as TypeScript and React
          that loves creativity and problem-solving involved in web development,
          constantly striving to improve skills and learn new things.
        </SDescription>
      </SSection>
    </SHero>
  );
}

export default Hero;
