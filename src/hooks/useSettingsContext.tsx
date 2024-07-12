import { useContext } from "react";
import {
  GlobalSettingsType,
  SettingsContext,
  SettingsContextType,
} from "../context/SettingsContext";

export type settings = GlobalSettingsType;

export const useSettingsContext = (): Pick<
  SettingsContextType,
  "globalSettings"
> & {
  toggleDarkMode: () => void;
  toggleLang: () => void;
} => {
  const {
    colorsDarkMode,
    colorsLightMode,
    globalSettings,
    setGlobalSettings,
    langTextEn,
    langTextPt,
  } = useContext(SettingsContext);

  function toggleDarkMode() {
    setGlobalSettings((prevGlobalSettings) => ({
      ...prevGlobalSettings,
      ...(!prevGlobalSettings.isDark ? colorsDarkMode : colorsLightMode),
      isDark: !prevGlobalSettings.isDark,
    }));
  }

  function toggleLang() {
    setGlobalSettings((prevGlobalSettings) => ({
      ...prevGlobalSettings,
      lang: prevGlobalSettings.lang === "en" ? "pt" : "en",
      ...(prevGlobalSettings.lang === "en" ? langTextPt : langTextEn),
    }));
  }

  return {
    globalSettings,
    toggleDarkMode,
    toggleLang,
  };
};
