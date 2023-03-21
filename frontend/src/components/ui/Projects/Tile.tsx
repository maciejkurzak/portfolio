import React from "react";
import styled from "styled-components";
import { IconArrowUpRight } from "@tabler/icons-react";
import variables from "@/styles/GlobalStyles.module.scss";

const STile = styled.div(
  ({ width }: { width?: number }) => `
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  height: max(40vw, 15rem);
  grid-column: span ${width || 1};
  background-color: ${variables.gray8};
  background-image: url("https://picsum.photos/1000/800");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  @media (max-width: 900px) {
    grid-column: span 1;
  }
`
);

const STileButton = styled.a`
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
}: {
  width?: number;
  title: string;
  description: string;
}) {
  return (
    <STile width={width}>
      <h2>{title}</h2>
      <p>{description}</p>
      <STileButton href="#">
        <IconArrowUpRight />
      </STileButton>
    </STile>
  );
}

export default Tile;
