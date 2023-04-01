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
  margin: 60px;
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
  margin-bottom: 30px;
  font-weight: 500;
  color: ${variables.gray1};
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

function Projects({ projects }: { projects: unknown }) {
  return (
    <SProjects id="projects">
      <SWrapper>
        <STitle>Projects</STitle>
        <SGrid>
          {projects &&
            projects.map((project, i) => (
              <Tile
                key={i}
                width={i === (projects.length -1) ? 24 : [0, 3].includes(i % 4) ? 13 : 11}
                title={project.title}
                description={project.description}
                image={project.imageUrl}
                href={`post/${project.slug.current}`}
              />
            ))}
        </SGrid>
      </SWrapper>
    </SProjects>
  );
}

export default Projects;
