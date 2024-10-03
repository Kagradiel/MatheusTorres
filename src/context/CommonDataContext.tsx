import { createContext, ReactNode } from "react";
import doceSaborDesktop from "../assets/images/DoceSaborMobile.webp";
import doceSaborMobile from "../assets/images/DoceSaborDesktop.webp";
import trainerCard from "../assets/images/TrainerCardDesktop.webp";
import ildo from "../assets/images/IldoDesktop.webp";
import portfolioImage from "../assets/images/portfolio.webp";
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
      id: "portfolio",
      aria: "Portfolio Matheus Torres",
      imageMobile: portfolioImage,
      imageDesktop: portfolioImage,
      altText: "Portfolio Matheus Torres",
      link: "https://github.com/Kagradiel/MatheusTorres",
    },
    {
      id: "doce",
      aria: "Ana Doce Sabor",
      imageMobile: doceSaborMobile,
      imageDesktop: doceSaborDesktop,
      altText: "Ana Doce Sabor",
      link: "https://www.figma.com/design/sbqNbcD3tpIA8Y7tCeTu4h/Ana-Doce-Sabor",
    },
    {
      id: "trainer",
      aria: "Trainer Card",
      imageMobile: trainerCard,
      imageDesktop: trainerCard,
      altText: "Trainer Card",
      link: "https://github.com/Kagradiel/TrainerCardApi",
    },
    {
      id: "ildo",
      aria: "Neuropsicólogo Ildo Alves Dias",
      imageMobile: ildo,
      imageDesktop: ildo,
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
