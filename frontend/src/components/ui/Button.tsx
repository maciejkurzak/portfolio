import type React from "react";
import styled from "styled-components";
import variables from "@/styles/GlobalStyles.module.scss";

type Variant = "solid" | "outline";

interface Props {
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  variant?: Variant;
  children: string;
  icon?: string;
}

const SButton = styled.a(
  ({ variant }: { variant: Variant }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 10000px;
  background-color: ${variant === "solid" ? variables.primary : "transparent"};
  color: ${variables.gray1};
  border: ${variant === "solid" ? "none" : `1px solid ${variables.gray1}`};
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    background-color: ${
      variant === "solid" ? variables.primaryDark : variables.gray1
    };
    color: ${variant === "solid" ? variables.gray1 : variables.gray12};
  }
`
);

const SIcon = styled.span`
  stroke-width: 1.25;
  display: flex;
  align-items: center;
  justify-content: center;
  .tabler-icon {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

function Button({ href, target, rel, onClick, variant = "solid", children, icon }: Props) {
  return (
    <SButton
      href={href || ""}
      target={target || "_self"}
      rel={rel || "noopener noreferrer"}
      onClick={() => {
        if (!onClick) return;
        onClick();
      }}
      variant={variant}
    >
      <span>{children}</span>
      {icon && <SIcon><i className={`ti ti-${icon}`}></i></SIcon>}
    </SButton>
  );
}

export default Button;
