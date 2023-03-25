import type React from "react";
import styled from "styled-components";
import { IconMessage2 } from "@tabler/icons-react";
import Button from "../Button";
import variables from "@/styles/GlobalStyles.module.scss";

const SNavbar = styled.nav`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${variables.gray10};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

const SLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`;

const SLink = styled.li`
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${variables.primary};
    }
  }
`;

const Link = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <SLink>
    <a href={to}>{children}</a>
  </SLink>
);

function Navbar() {
  return (
    <SNavbar>
      <SLinks>
        <Link to="/#about">About</Link>
        <Link to="/#projects">Projects</Link>
      </SLinks>
      <Button href="/#contact" icon={<IconMessage2 />}>
        Get in touch
      </Button>
    </SNavbar>
  );
}

export default Navbar;
