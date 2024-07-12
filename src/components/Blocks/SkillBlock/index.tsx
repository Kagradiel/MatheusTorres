import styled from "styled-components";
import React from "react";
import {
  useSettingsContext,
  settings,
} from "../../../hooks/useSettingsContext";

const SkillBlockStyle = styled.div<{
  $settings: settings;
  $size: string;
  $align: string;
}>`
  text-align: ${(props) => props.$align};
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 20px;
  padding: 0px 10px;
  background-color: ${(props) => props.$settings.boxBg};
  width: ${(props) =>
    props.$size === "p" || props.$size === "m" ? "11vw" : "30vw"};
  height: ${(props) =>
    props.$size === "p"
      ? "4vh"
      : props.$size === "m" || props.$size === "g"
        ? "8vh"
        : "13vh"};
  border-radius: 7px;
  transition: 0.5s;
  color: ${(props) => props.$settings.blackOrWhite};
  p {
    font-size: 0.67em;
    font-weight: 600;
    margin: 0;
  }

  h3 {
    margin: 0;
    font-size: 1em;
    font-weight: 800;
  }
  @media screen and (min-width: 520px) {
    width: ${(props) =>
      props.$size === "p" || props.$size === "m" ? "13vw" : "32vw"};
    height: ${(props) =>
      props.$size === "p"
        ? "6vh"
        : props.$size === "m" || props.$size === "g"
          ? "10vh"
          : "17.5vh"};
    /*p {
      font-size: 1.1em;
    }

    h3 {
      margin: 8px 0;
      font-size: 1.8em;
    }*/
  }
  @media screen and (min-width: 768px) {
    line-height: 30px;
    width: ${(props) =>
      props.$size === "p" || props.$size === "m" ? "14vw" : "33vw"};
    height: ${(props) =>
      props.$size === "p"
        ? "6vh"
        : props.$size === "m" || props.$size === "g"
          ? "9vh"
          : "16.5vh"};
    p {
      font-size: 1.1em;
    }

    h3 {
      margin: 8px 0;
      font-size: 1.8em;
    }
  }
  @media screen and (min-width: 768px) and (orientation: Landscape) {
    line-height: 20px;
    width: ${(props) =>
      props.$size === "p" || props.$size === "m" ? "7.5vw" : "18vw"};
    height: ${(props) =>
      props.$size === "p"
        ? "6vh"
        : props.$size === "m" || props.$size === "g"
          ? "12vh"
          : "19.5vh"};
    p {
      font-size: 0.6em;
    }

    h3 {
      font-size: 1.2em;
    }
  }
  @media screen and (min-width: 1025px) and (orientation: Landscape) {
    width: ${(props) =>
      props.$size === "p" || props.$size === "m" ? "8.1vw" : "18.9vw"};
    p {
      font-size: 0.7em;
    }

    h3 {
      font-size: 1.5em;
    }
  }
  @media screen and (min-width: 2560px) and (orientation: Landscape) {
    line-height: 30px;
    width: ${(props) =>
      props.$size === "p" || props.$size === "m" ? "4vw" : "9.3vw"};
    height: ${(props) =>
      props.$size === "p"
        ? "16.3vh"
        : props.$size === "m" || props.$size === "g"
          ? "33.6vh"
          : "50.5vh"};
    p {
      font-size: 0.9em;
      text-align: center;
    }

    h3 {
      font-size: 1.8em;
      text-align: center;
    }
  }
`;

interface skillProps {
  size: string;
  align: string;
  children: React.JSX.Element | (string | React.JSX.Element)[];
}

const SkillBlock = ({ size, align, children }: skillProps) => {
  const { globalSettings } = useSettingsContext();

  return (
    <SkillBlockStyle $settings={globalSettings} $align={align} $size={size}>
      {children}
    </SkillBlockStyle>
  );
};

export default SkillBlock;
