import { useCallback, useContext, useState } from "react";
import {
  CommonDataContext,
  WorkBlockDataType,
} from "../context/CommonDataContext";

export type workDataType = WorkBlockDataType;

type UseCommonDataContextReturnType = {
  recoveredData: WorkBlockDataType | {};
  retrieveWorkBlocksData: (id: string) => void;
};

export const useCommonDataContext = () => {
  const { workBlocksData } = useContext(CommonDataContext);
  const [recoveredData, setRecoveredData] = useState<WorkBlockDataType | {}>(
    {}
  );

  const retrieveWorkBlocksData = useCallback(
    (id: string) => {
      const foundData = workBlocksData.find((data) => data.id === id);
      if (foundData) {
        setRecoveredData(foundData);
      } else {
        setRecoveredData({}); // Set to appropriate default value
      }
    },
    [workBlocksData]
  );

  return {
    recoveredData,
    retrieveWorkBlocksData,
  };
};
