import styled from "styled-components";
import { useEffect } from "react";
import { useSettingsContext } from "../../../hooks/useSettingsContext";
import { useCommonDataContext } from "../../../hooks/useCommonDataContext";

const ImageWorkBlockStyle = styled.a`
  background-image: url(${(props) => props.$imageMobile});
  height: 100%;
  width: 100%;
  background-size: contain;
  background-position: center center;
  border-radius: 5px;
  box-shadow: ${(props) =>
    !props.$settings.isDark ? "0px 1px 4px #929090" : "none"};
  @media screen and (min-width: 768px) and (orientation: landscape) {
    background-image: url(${(props) => props.$imageDesktop});
  }
`;

const ImageWorkBlock = ({ id }) => {
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
    />
  );
};

export default ImageWorkBlock;
