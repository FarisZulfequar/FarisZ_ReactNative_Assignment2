import React, {createContext, ReactNode, useState} from "react";

interface NumberContainerType {
  numberMap: Record<number, number>;
  resetNumberList: () => void;
  increaseGeneratedNumberTimes: (generatedNum: number) => void;
}

interface ProviderProps {
  children: ReactNode;
}