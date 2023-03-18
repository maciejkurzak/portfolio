import React from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { CustomEase } from 'gsap/CustomEase';
import styled from 'styled-components';

import GitIcon from '@/assets/logos/git.svg';
import JsIcon from '@/assets/logos/js.svg';
import ReactIcon from '@/assets/logos/react.svg';
import TsIcon from '@/assets/logos/ts.svg';

gsap.registerPlugin(Observer);
gsap.registerPlugin(CustomEase);

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
  rotate: ${rot}deg;
  transform: translate(-50%, -50%);
`);

const icons = [
  {
    src: GitIcon, top: 15, right: 4, rot: -10,
  },
  {
    src: JsIcon, top: 60, right: 0, rot: -10,
  },
  {
    src: ReactIcon, top: 80, right: 20, rot: 15,
  },
  {
    src: TsIcon, top: 20, right: 30, rot: 20,
  },
];

function Icons() {
  const elRef = React.useRef<HTMLImageElement[]>([]);

  React.useEffect(() => {
    elRef.current.forEach((icon) => {
      Observer.create({
        target: icon,
        onHover: (el) => {
          gsap.to(el.target, {
            scale: 1.2,
            rotate: `${Number(el.target.attributes['data-rot'].value) + 15}deg`,
            ease: 'back.out(2)',
            duration: 0.2,
          });
        },
        onHoverEnd: (el) => {
          gsap.to(el.target, {
            scale: 1,
            rotate: `${el.target.attributes['data-rot'].value}deg`,
            ease: 'back.out(2)',
            duration: 0.2,
          });
        },
      });
    });
  }, [elRef.current]);

  return (
    <SIcons>
      {icons.map((icon, i) => (
        <SIcon className='icon'
          ref={(element) => element && elRef.current.push(element)}
          key={i}
          top={icon.top}
          right={icon.right}
          rot={icon.rot}
          src={icon.src}
          data-rot={icon.rot}
        />

      ))}
    </SIcons>
  );
}

export default Icons;
