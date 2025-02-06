import { createContext, ReactNode } from "react";
import doceSaborDesktop from "../assets/images/DoceSaborMobile.webp";
import doceSaborMobile from "../assets/images/DoceSaborDesktop.webp";
import blogDotNet from "../assets/images/blogpessoal.webp";
import blogJava from "../assets/images/blogpessoalJava.webp";
import blogReact from "../assets/images/blog_pessoal_react.webp";
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
      aria: "Front-end do Blog em React",
      imageMobile: blogReact,
      imageDesktop: blogReact,
      altText: "Blog pessoal em React",
      link: "https://github.com/Kagradiel/blog_front",
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
      imageMobile: blogDotNet,
      imageDesktop: blogDotNet,
      altText: "Api de Blog em C#",
      link: "https://github.com/Kagradiel/blogpessoal",
    },
    {
      id: "4",
      aria: "Api de blog em Java",
      imageMobile: blogJava,
      imageDesktop: blogJava,
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
