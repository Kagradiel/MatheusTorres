import React from "react";
import styled from "styled-components";
import { settings, useSettingsContext } from "../../hooks/useSettingsContext";

const TextReceived = styled.p<{ $settings: settings }>`
  font-size: 0.88em;
  font-weight: 400;
  margin: 6px;
  text-align: center;
  color: ${(props) => props.$settings.blackOrWhite};
  .highlight {
    font-weight: 600;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 768px) and (orientation: Landscape) {
    font-size: 0.8em;
  }
  @media screen and (min-width: 1024px) and (orientation: Landscape) {
    font-size: 1em;
  }
`;

interface textProps {
  children: (string | JSX.Element)[];
  keys?: string;
}

const Text = ({ children, keys }: textProps) => {
  const { globalSettings } = useSettingsContext();

  return (
    <TextReceived $settings={globalSettings} key={keys}>
      {children}
    </TextReceived>
  );
};

export default Text;
