import styled from "styled-components";
import { settings, useSettingsContext } from "../../hooks/useSettingsContext";

const ToggleLanguage = styled.button<{ $settings: settings }>`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  align-items: center;
  .activePt {
    color: ${(props) =>
      props.$settings.lang === "pt"
        ? props.$settings.highlight
        : props.$settings.blackOrWhite};
    font-weight: ${(props) => (props.$settings.lang === "pt" ? "800" : "500")};
  }
  .activeEn {
    color: ${(props) =>
      props.$settings.lang === "en"
        ? props.$settings.highlight
        : props.$settings.blackOrWhite};
    font-weight: ${(props) => (props.$settings.lang === "en" ? "800" : "500")};
  }
  .langText {
    font-size: 0.9em;
  }
  .bar {
    margin: 0 2px;
    color: ${(props) => props.$settings.blackOrWhite};
  }
`;

const LanguageSettings = () => {
  const { globalSettings, toggleLang } = useSettingsContext();

  return (
    <ToggleLanguage $settings={globalSettings} onClick={() => toggleLang()}>
      <p className="langText activePt">PT</p>
      <p className="bar">-</p>
      <p className="langText activeEn">EN</p>
    </ToggleLanguage>
  );
};

export default LanguageSettings;
