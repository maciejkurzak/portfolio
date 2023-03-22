import React from "react";
import styled from "styled-components";
import {
  IconArrowUpRight,
  IconAt,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import variables from "@/styles/GlobalStyles.module.scss";

const SInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  width: 50%;
`;

const SInfoItem = styled.a(
  ({ span }: { span?: number }) => `
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid ${variables.gray8};
  grid-column: span ${span || 1};
  position: relative;
`
);

const SIcon = styled.div`
  width: 3rem;
  height: 3rem;

  svg {
    width: inherit;
    height: inherit;
  }
`;

const SText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 1rem;
  color: white;
`;

const SLinkIcon = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: 2rem;
  height: 2rem;
  svg {
    width: inherit;
    height: inherit;
  }
`;

function Info() {
  return (
    <SInfo>
      <SInfoItem>
        <SIcon>
          <IconBrandLinkedin />
        </SIcon>
        <SText>/maciejkurzak</SText>
        <SLinkIcon>
          <IconArrowUpRight />
        </SLinkIcon>
      </SInfoItem>
      <SInfoItem>
        <SIcon>
          <IconBrandGithub />
        </SIcon>
        <SText>/maciejkurzak</SText>
        <SLinkIcon>
          <IconArrowUpRight />
        </SLinkIcon>
      </SInfoItem>
      <SInfoItem span={2}>
        <SIcon>
          <IconAt />
        </SIcon>
        <SText>maciejkurzak@pm.me</SText>
        <SLinkIcon>
          <IconArrowUpRight />
        </SLinkIcon>
      </SInfoItem>
    </SInfo>
  );
}

export default Info;
