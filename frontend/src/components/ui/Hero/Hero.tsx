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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SSection = styled.section`
  max-width: min(50rem, 60%);
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
      <Icons />
    </SHero>
  );
}

export default Hero;
