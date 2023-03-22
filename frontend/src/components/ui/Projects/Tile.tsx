import React from "react";
import styled from "styled-components";
import { IconArrowUpRight } from "@tabler/icons-react";
import variables from "@/styles/GlobalStyles.module.scss";

const STile = styled.a(
  ({ width, image }: { width?: number; image: string }) => `
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  height: max(40vw, 15rem);
  grid-column: span ${width || 1};
  background-color: ${variables.gray8};
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  @media (max-width: 900px) {
    grid-column: span 1;
  }
  transition: transform 0.2s ease-in-out;
  :hover {
    transform: scale(1.01);
  }
`
);

const STileTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${variables.gray1};
`;

const STileDescription = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: ${variables.gray5};
`;

const STileIcon = styled.p`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  color: ${variables.gray5};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${variables.gray1};
  }
  svg {
    width: inherit;
    height: inherit;
  }
`;

function Tile({
  width,
  title,
  description,
  image,
  href,
}: {
  width?: number;
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <STile width={width} href={href} image={image}>
      <STileTitle>{title}</STileTitle>
      <STileDescription>{description}</STileDescription>
      <STileIcon>
        <IconArrowUpRight />
      </STileIcon>
    </STile>
  );
}

export default Tile;
