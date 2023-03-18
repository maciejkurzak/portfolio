import React from 'react';

import styled from 'styled-components';

import GitIcon from '@/assets/logos/git.svg';
import JsIcon from '@/assets/logos/js.svg';
import ReactIcon from '@/assets/logos/react.svg';
import TsIcon from '@/assets/logos/ts.svg';

const SIcons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
`;

const SIcon = styled.img(({ top, right, rot }: { top: number; right: number, rot: number }) => `
  width: 5rem;
  position: absolute;
  top: ${top}%;
  right: ${right}%;
  transform: rotate(${rot}deg) translate(-50%, -50%);
`);

function Icons() {
  return (
    <SIcons>
      <SIcon top={15} right={6} rot={-10} src={GitIcon} />
      <SIcon top={60} right={5} rot={-10} src={JsIcon} />
      <SIcon top={80} right={20} rot={15} src={ReactIcon} />
      <SIcon top={20} right={25} rot={20} src={TsIcon} />
    </SIcons>
  );
}

export default Icons;
