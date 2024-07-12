import { useCallback, useContext, useState } from "react";
import { CommonDataContext } from "../context/CommonDataContext";
import { WorkBlockDataType } from "../shared/interfaces/IworkBlockDataType";

export const useCommonDataContext = () => {
  const { workBlocksData } = useContext(CommonDataContext);
  const [recoveredData, setRecoveredData] = useState<WorkBlockDataType>({
    id: "",
    aria: "",
    imageMobile: "",
    imageDesktop: "",
    altText: "",
    link: "",
  });

  const retrieveWorkBlocksData = useCallback(
    (id: string) => {
      const foundData = workBlocksData.find((data) => data.id === id);
      setRecoveredData(foundData || recoveredData);
    },
    [workBlocksData]
  );

  return {
    recoveredData,
    retrieveWorkBlocksData,
  };
};
