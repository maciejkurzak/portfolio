import React from "react";
import styled from "styled-components";
import variables from "@/styles/GlobalStyles.module.scss";
import Tile from "./Tile";

const SProjects = styled.section`
  color: ${variables.gray5};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 60px;
`;

const SWrapper = styled.div`
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const STitle = styled.h1`
  font-size: 2rem;
  margin: 60px 0 30px 0;
`;

const SGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-auto-flow: row;
  grid-gap: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

function Projects() {
  return (
    <SProjects>
      <SWrapper>
        <STitle>Projects</STitle>
        <SGrid>
          <Tile
            width={11}
            title="Project 1"
            description="Project 1 description"
          />
          <Tile
            width={13}
            title="Project 2"
            description="Project 2 description"
          />
          <Tile
            width={13}
            title="Project 2"
            description="Project 2 description"
          />
          <Tile
            width={11}
            title="Project 2"
            description="Project 2 description"
          />
        </SGrid>
      </SWrapper>
    </SProjects>
  );
}

export default Projects;
