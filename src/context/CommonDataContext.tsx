import { createContext, ReactNode } from "react";
import doceSaborDesktop from "../assets/images/DoceSaborMobile.webp";
import doceSaborMobile from "../assets/images/DoceSaborDesktop.webp";
import blogpessoal from "../assets/images/blogpessoal.webp";
import blogpessoalJava from "../assets/images/blogpessoalJava.webp";
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
      id: "2",
      aria: "Portfolio Matheus Torres",
      imageMobile: portfolioImage,
      imageDesktop: portfolioImage,
      altText: "Portfolio Matheus Torres",
      link: "https://github.com/Kagradiel/MatheusTorres",
    },
    {
      id: "3",
      aria: "Ana Doce Sabor",
      imageMobile: doceSaborMobile,
      imageDesktop: doceSaborDesktop,
      altText: "Ana Doce Sabor",
      link: "https://www.figma.com/design/sbqNbcD3tpIA8Y7tCeTu4h/Ana-Doce-Sabor",
    },
    {
      id: "1",
      aria: "Api de Blog em C#",
      imageMobile: blogpessoal,
      imageDesktop: blogpessoal,
      altText: "Api de Blog em C#",
      link: "https://github.com/Kagradiel/blogpessoal",
    },
    {
      id: "4",
      aria: "Api de blog em Java",
      imageMobile: blogpessoalJava,
      imageDesktop: blogpessoalJava,
      altText: "Api de blog em Java",
      link: "https://github.com/Kagradiel/blog",
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
