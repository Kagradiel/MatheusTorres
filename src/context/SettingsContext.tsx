import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

type ColorsType = {
  blackOrWhite: string;
  highlight: string;
  hoverHighlight: string;
  boxBg: string;
  pageBg: string;
  toggleBtnBg: string;
  toggleBtn: string;
  linearGradient: string;
};

type LangTextType = {
  cardName: (string | JSX.Element)[];
  cardType: (string | JSX.Element)[];
  workblocks: string;
  skillblocks: string;
  footer: (string | JSX.Element)[];
};

export type GlobalSettingsType = {
  blackOrWhite: string;
  highlight: string;
  hoverHighlight: string;
  boxBg: string;
  pageBg: string;
  toggleBtnBg: string;
  toggleBtn: string;
  linearGradient: string;
  cardName: (string | JSX.Element)[];
  cardType: (string | JSX.Element)[];
  workblocks: string;
  skillblocks: string;
  footer: (string | JSX.Element)[];
  isDark: boolean;
  lang: "en" | "pt";
};

export type SettingsContextType = {
  colorsDarkMode: ColorsType;
  colorsLightMode: ColorsType;
  globalSettings: GlobalSettingsType;
  setGlobalSettings: Dispatch<SetStateAction<GlobalSettingsType>>;
  langTextEn: LangTextType;
  langTextPt: LangTextType;
};

export const SettingsContext = createContext<SettingsContextType>(
  {} as SettingsContextType
);

type SettingsProviderProps = {
  children: ReactNode;
};

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const colorsDarkMode: ColorsType = {
    blackOrWhite: "#dcd8c7",
    highlight: "#9bd5d5",
    hoverHighlight: "#b1b1b3",
    boxBg: "#4f5254",
    pageBg: "#021d21",
    toggleBtnBg: "#798180",
    toggleBtn: "#384042",
    linearGradient: `linear-gradient(52deg, #343b42 0%, 
                                                #4a4d4f 17%,
                                                #404548 40%, 
                                                #2d3132 100%)`,
  };

  const colorsLightMode: ColorsType = {
    blackOrWhite: "#000000",
    highlight: "#10689F",
    hoverHighlight: "#445f6c",
    boxBg: "#E8E8E8",
    pageBg: "#F4F4F4",
    toggleBtnBg: "#D9D9D9",
    toggleBtn: "#F5F5F5",
    linearGradient: `linear-gradient(52deg,  rgba(246,238,238,1) 0%,
                                                 rgba(243,236,236,1) 17%, 
                                                 rgba(224,222,222,1) 40%, 
                                                 rgba(239,237,237,1) 100%)`,
  };

  const langTextEn: LangTextType = {
    cardName: ["Hi, I'm ", <strong key="nameEng"> Matheus Torres </strong>],
    cardType: ["A ", <strong key="typeEng">FullStack</strong>, " Developer"],
    workblocks: "if ( Developed || Developing )",
    skillblocks: "My Skills",
    footer: ["Created By ", <strong key="footerEng">Matheus Torres</strong>],
  };

  const langTextPt: LangTextType = {
    cardName: ["Olá, eu sou ", <strong key="namePt"> Matheus Torres </strong>],
    cardType: ["Um Dev ", <strong key="typePt">FullStack</strong>],
    workblocks: "if ( Desenvolvi || Desenvolvendo )",
    skillblocks: "Minhas Habilidades",
    footer: ["Criado Por ", <strong key="footerPt">Matheus Torres</strong>],
  };

  const [globalSettings, setGlobalSettings] = useState<GlobalSettingsType>({
    ...colorsLightMode,
    ...langTextPt,
    isDark: false,
    lang: "pt",
  });

  return (
    <SettingsContext.Provider
      value={{
        colorsDarkMode,
        colorsLightMode,
        globalSettings,
        setGlobalSettings,
        langTextEn,
        langTextPt,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
