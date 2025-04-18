import { updateNodeObjectiveById, updateKeyResultById, addKeyResultById, addChildToNodeById, removeNodeById, removeKeyResultById } from "@/utils/graph";
import { useState } from "react";

export default function useOkrData(initialData: OkrData) {
  const [data, setData] = useState<OkrData>(initialData);

  const updateObjectiveFactory = (id: number) => {
    return (objective: string) => {
      setData((prev) => {
        const deepCopy = JSON.parse(JSON.stringify(prev)) as OkrData;
        updateNodeObjectiveById(id, deepCopy.data, objective);
        return deepCopy;
      });
    };
  };

  const updateKeyResultFactory = (id: number) => {
    return (keyResult: string, keyResultNumber: number) => {
      setData((prev) => {
        const deepCopy = JSON.parse(JSON.stringify(prev)) as OkrData;
        updateKeyResultById(id, deepCopy.data, keyResult, keyResultNumber);
        return deepCopy;
      });
    };
  };

  const addKeyResultFactory = (id: number) => {
    return (keyResult: string) => {
      setData((prev) => {
        const deepCopy = JSON.parse(JSON.stringify(prev)) as OkrData;
        addKeyResultById(id, deepCopy.data, keyResult);
        return deepCopy;
      });
    };
  };

  const addChildObjectiveFactory = (id: number) => {
    return (objective: string) => {
      setData((prev) => {
        const deepCopy = JSON.parse(JSON.stringify(prev)) as OkrData;
        addChildToNodeById(id, deepCopy, objective);
        return deepCopy;
      });
    };
  };

  const removeObjectiveFactory = (id: number) => {
    return () => {
      setData((prev) => {
        const deepCopy = JSON.parse(JSON.stringify(prev)) as OkrData;
        removeNodeById(id, deepCopy);
        return deepCopy;
      });
    };
  };

  const removeKeyResultFactory = (id: number) => {
    return (keyResultNumber: number) => {
      setData((prev) => {
        const deepCopy = JSON.parse(JSON.stringify(prev)) as OkrData;
        removeKeyResultById(id, deepCopy, keyResultNumber);
        return deepCopy;
      });
    };
  };
  return {
    data,
    setData,
    updateObjectiveFactory,
    updateKeyResultFactory,
    addKeyResultFactory,
    addChildObjectiveFactory,
    removeObjectiveFactory,
    removeKeyResultFactory
  };
}
