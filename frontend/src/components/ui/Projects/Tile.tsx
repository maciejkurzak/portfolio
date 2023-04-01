import React from "react";
import styled from "styled-components";
import { IconArrowUpRight } from "@tabler/icons-react";
import variables from "@/styles/GlobalStyles.module.scss";

const STile = styled.a(
  ({ width, image }: { width?: number; image: string }) => `
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  height: max(60vh, 15rem);
  grid-column: span ${width || 1};
  background-color: ${variables.gray8};
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  @media (max-width: 900px) {
    grid-column: span 1;
  }
  :hover {
    .overlay {
      background-color: rgba(0, 0, 0, 0.4);
    }
    .icon {
      svg {
        transform: translate(15%, -15%);
      }
    }
  }
  
`
);

const SOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  transition: background-color 0.2s ease-in-out;
`;

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
  &:hover {
    color: ${variables.gray1};
  }
  svg {
    width: inherit;
    height: inherit;
    transition: transform 0.2s ease-in-out;
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
    <STile width={width} href={href} image={image} rel="noopener noreferrer prefetch">
      <SOverlay className="overlay">

      <STileTitle>{title}</STileTitle>
      <STileDescription>{description}</STileDescription>
      <STileIcon className="icon">
        <IconArrowUpRight />
      </STileIcon>
      </SOverlay>
    </STile>
  );
}

export default Tile;
