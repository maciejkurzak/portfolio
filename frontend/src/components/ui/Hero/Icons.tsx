import React from "react";
import { Sine, gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { CustomEase } from "gsap/CustomEase";
import styled from "styled-components";

import GitIcon from "@/assets/logos/git.svg";
import JsIcon from "@/assets/logos/js.svg";
import ReactIcon from "@/assets/logos/react.svg";
import TsIcon from "@/assets/logos/ts.svg";

gsap.registerPlugin(Observer);
gsap.registerPlugin(CustomEase);

const SIcons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 40%;
  z-index: 0;
  @media (max-width: 900px) {
    display: none;
  }
`;

const SIcon = styled.img(
  ({ top, right, rot, color }: { top: number; right: number; rot: number; color: string }) => `
  width: 5rem;
  position: absolute;
  top: ${top}%;
  right: ${right}%;
  rotate: ${rot}deg;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0 0 0.5rem ${color}80);
`
);

const icons = [
  {
    src: GitIcon,
    alt: "git",
    top: 15,
    right: 8,
    rot: -10,
    color: "#DE4C36",
  },
  {
    src: JsIcon,
    alt: "js",
    top: 60,
    right: 0,
    rot: -10,
    color: "#F7DF1E",
  },
  {
    src: ReactIcon,
    alt: "react",
    top: 80,
    right: 40,
    rot: 15,
    color: "#149ECA",
  },
  {
    src: TsIcon,
    alt: "ts",
    top: 20,
    right: 60,
    rot: 20,
    color: "#3178C6",
  },
];


const random = (min: number, max: number) => {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
};

const randomX = random(1, 15);
const randomY = random(1, 15);
const randomTime = random(3, 5);

const moveX = (target: gsap.TweenTarget, direction: number) => {
  
  gsap.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

const moveY = (target: gsap.TweenTarget, direction: number) => {
  
  gsap.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function Icons() {
  const elRef = React.useRef<HTMLImageElement[]>([]);

  React.useEffect(() => {
    elRef.current.forEach((icon) => {
      gsap.set(icon, {
        x: randomX(-1),
        y: randomX(1),
      });
      
      moveX(icon, 1);
      moveY(icon, -1);

      Observer.create({
        target: icon,
        onHover: (el) => {
          gsap.to(el.target, {
            scale: 1.2,
            rotate: `${Number(el.target.attributes["data-rot"].value) + 15}deg`,
            ease: "back.out(2)",
            duration: 0.2,
          });
        },
        onHoverEnd: (el) => {
          gsap.to(el.target, {
            scale: 1,
            rotate: `${el.target.attributes["data-rot"].value}deg`,
            ease: "back.out(2)",
            duration: 0.2,
          });
        },
      });
    });
  }, [elRef.current]);

  return (
    <SIcons>
      {icons.map((icon, i) => (
        <SIcon
          className="icon"
          ref={(element) => element && elRef.current.push(element)}
          key={i}
          {...icon}
          data-rot={icon.rot}
          alt={`${icon.alt} icon`}
        />
      ))}
    </SIcons>
  );
}

export default Icons;
