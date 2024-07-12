import styled from "styled-components";
import { useSettingsContext, settings } from "../../hooks/useSettingsContext";
import React from "react";

const ToggleConfig = styled.button<{ $settings: settings }>`
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.$settings.toggleBtnBg};
  width: 11vw;
  height: 2.8vh;
  border-radius: 12px;
  box-shadow: ${(props) =>
    props.$settings.isDark
      ? "inset 0px 4px 4px #2f2c2c"
      : "inset 0px 4px 4px #6d6b6b"};
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.$settings.isDark ? "flex-start" : "flex-end"};
  .circle {
    background-color: ${(props) => props.$settings.toggleBtn};
    height: 73%;
    width: 4.3vw;
    border-radius: 12px;
    margin: -1px;
  }
  @media screen and (min-width: 768px) {
    width: 5vw;
    height: 2vh;
    .circle {
      width: 2vw;
    }
  }
  @media screen and (orientation: Landscape) {
    width: 45px;
    height: 20px;
    .circle {
      width: 15px;
      height: 15px;
    }
  }
`;

interface ToggleButtonProps {
  aria: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ aria }) => {
  const { toggleDarkMode, globalSettings } = useSettingsContext();

  return (
    <ToggleConfig
      aria-label={aria}
      $settings={globalSettings}
      onClick={() => toggleDarkMode()}
    >
      <div className="circle" />
    </ToggleConfig>
  );
};

export default ToggleButton;
