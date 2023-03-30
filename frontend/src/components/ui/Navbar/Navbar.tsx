import styled from "styled-components";
// import ButtonLink from "../ButtonLink";
import variables from "@/styles/GlobalStyles.module.scss";

const SNavbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${variables.gray10};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
  z-index: 1000;
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
      {/* <ButtonLink href="/#contact" icon="message-2">
        Get in touch
      </ButtonLink> */}
    </SNavbar>
  );
}

export default Navbar;
