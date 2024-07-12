import styled from "styled-components";
import { settings, useSettingsContext } from "../../hooks/useSettingsContext";

const TitleStyle = styled.div<{ $settings: settings }>`
  height: 7vh;
  width: auto;
  background: ${(props) => props.$settings.boxBg};
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) =>
    props.$settings.isDark ? "" : "0px 1px 4px #929090"};
  h2 {
    font-weight: 400;
    font-family: "Darker Grotesque";
    font-display: swap;
    font-size: 2rem;
    color: ${(props) => props.$settings.blackOrWhite};
  }
  @media screen and (min-width: 768px) {
    h2 {
      font-size: 2.3rem;
      margin: 0;
    }
  }
  @media screen and (min-width: 768px) and (orientation: Landscape) {
    height: 5vh;
    h2 {
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 1024px) and (min-height: 613px) and (orientation: Landscape) {
    height: 6vh;
    h2 {
      font-size: 2rem;
    }
  }
`;

interface props {
  children: string;
}

const Title = ({ children }: props) => {
  const { globalSettings } = useSettingsContext();

  return (
    <TitleStyle $settings={globalSettings}>
      <h2>{children}</h2>
    </TitleStyle>
  );
};

export default Title;
