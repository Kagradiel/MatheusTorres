import { createContext, ReactNode } from "react";
import doceSaborMobile from "../assets/images/DoceSaborMobile.webp";
import doceSaborDesktop from "../assets/images/DoceSaborDesktop.webp";
import trainerCardMobile from "../assets/images/TrainerCardMobile.webp";
import trainerCardDesktop from "../assets/images/TrainerCardDesktop.webp";
import ildoMobile from "../assets/images/IldoMobile.webp";
import ildoDesktop from "../assets/images/IldoDesktop.webp";
import { WorkBlockDataType } from "../shared/interfaces/IworkBlockDataType";

type CommonDataProviderProps = {
  children: ReactNode;
};

type CommonDataContextType = {
  workBlocksData: WorkBlockDataType[];
};

export const CommonDataContext = createContext<CommonDataContextType>(
  {} as CommonDataContextType
);

export const CommonDataProvider = ({ children }: CommonDataProviderProps) => {
  const workBlocksData: WorkBlockDataType[] = [
    {
      id: "doce",
      aria: "Ana Doce Sabor",
      imageMobile: doceSaborMobile,
      imageDesktop: doceSaborDesktop,
      altText: "Ana Doce Sabor",
      link: "https://www.figma.com/design/sbqNbcD3tpIA8Y7tCeTu4h/Ana-Doce-Sabor?node-id=267-2&t=EoFF274zxt3qY8U3-1",
    },
    {
      id: "trainer",
      aria: "Trainer Card",
      imageMobile: trainerCardMobile,
      imageDesktop: trainerCardDesktop,
      altText: "Trainer Card",
      link: "https://github.com/Kagradiel/TrainerCard-React",
    },
    {
      id: "ildo",
      aria: "Neuropsicólogo Ildo Alves Dias",
      imageMobile: ildoMobile,
      imageDesktop: ildoDesktop,
      altText: "Psicologo Ildo",
      link: "https://neuropsicologoildo.com.br/",
    },
  ];
  return (
    <CommonDataContext.Provider
      value={{
        workBlocksData,
      }}
    >
      {children}
    </CommonDataContext.Provider>
  );
};
