import styled from "styled-components";
import { useEffect } from "react";
import {
  settings,
  useSettingsContext,
} from "../../../hooks/useSettingsContext";
import { useCommonDataContext } from "../../../hooks/useCommonDataContext";

const ImageWorkBlockStyle = styled.a<StyleBlockProps>`
  background-image: ${(props) =>
    props.$settings.isDark
      ? `linear-gradient(rgba(61, 44, 2, 0.23), rgba(61, 44, 2, 0.279)), url(${props.$imageMobile})`
      : `url(${props.$imageMobile})`};
  height: 100%;
  width: 100%;
  background-size: contain;
  background-position: center center;
  border-radius: 5px;
  box-shadow: ${(props) =>
    !props.$settings.isDark ? "0px 1px 4px #929090" : "none"};
  &:hover {
    transform: scale(1.025);
    background-image: ${(props) =>
      props.$settings.isDark
        ? `linear-gradient(
          rgba(40, 53, 53, 0.968),
          rgba(40, 53, 53, 0.968)
        ), url(${props.$imageMobile})`
        : `linear-gradient(
          #f6f6f6f5,
          #f6f6f6f6
        ), url(${props.$imageMobile})`};
    transition: 0.4s;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      h3 {
        max-width: 50%;
        text-align: center;
        font-display: swap;
        font-size: 1.2rem;
        color: ${(props) => props.$settings.blackOrWhite};
        font-weight: 600;
      }
    }
  }
  div {
    display: none;
  }
  @media screen and (min-width: 768px) and (orientation: landscape) {
    background-image: ${(props) =>
      props.$settings.isDark
        ? `linear-gradient(rgba(61, 44, 2, 0.304), rgba(61, 44, 2, 0.353)), url(${props.$imageDesktop})`
        : `url(${props.$imageDesktop})`};
    &:hover {
      background-image: ${(props) =>
        props.$settings.isDark
          ? `linear-gradient(
          rgba(73, 78, 83, 0.968),
          rgba(73, 78, 83, 0.968)
        ), url(${props.$imageDesktop})`
          : `linear-gradient(
          #f6f6f6f9,
          #f6f6f6f7
        ), url(${props.$imageDesktop})`};
    }
  }
`;

interface StyleBlockProps {
  $imageMobile: string;
  $imageDesktop: string;
  $settings: settings;
  alt: string;
}

interface imageWProps {
  id: string;
  children: string;
  tgt?: string;
}

const ImageWorkBlock = ({ id, children, tgt = "_blank" }: imageWProps) => {
  const { globalSettings } = useSettingsContext();
  const { retrieveWorkBlocksData, recoveredData } = useCommonDataContext();

  useEffect(() => {
    retrieveWorkBlocksData(id);
  }, [id, retrieveWorkBlocksData]);

  return (
    <ImageWorkBlockStyle
      $settings={globalSettings}
      $imageMobile={recoveredData.imageMobile || ""}
      $imageDesktop={recoveredData.imageDesktop || ""}
      href={recoveredData.link || ""}
      alt={recoveredData.altText || ""}
      aria-label={recoveredData.aria || ""}
      target={tgt}
    >
      <div>
        <h3>{children}</h3>
      </div>
    </ImageWorkBlockStyle>
  );
};

export default ImageWorkBlock;
