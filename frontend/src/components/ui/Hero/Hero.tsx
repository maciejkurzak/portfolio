import React from 'react';
import styled from 'styled-components';
import { IconMessage2, IconFileDownload } from '@tabler/icons-react';
import variables from '@/styles/GlobalStyles.module.scss';
import Icons from './Icons.tsx';
import Button from '../Button.tsx';

const SHero = styled.div`
  color: ${variables.gray5};
  margin: 60px;
  min-height: 70vh;
  position: relative;
`;

const SMain = styled.main`
  position: absolute;
  max-width: 1320px;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${variables.gray8};
`;

const SSection = styled.section`
position: absolute;
  width: 100%;
  height: 100%;
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

const SButtons = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: row;
  gap: 1rem;
`;

function Hero() {
  return (
    <SHero>
      <SMain>
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
          <SButtons>
            <Button variant="solid" href="#projects" icon={<IconMessage2 />}>Get in touch</Button>
            <Button variant="outline" onClick={() => console.log('123')} icon={<IconFileDownload />}>Download CV</Button>
          </SButtons>
        </SSection>
      </SMain>
    </SHero>
  );
}

export default Hero;
