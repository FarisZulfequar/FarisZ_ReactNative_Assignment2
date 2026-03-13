import React, {createContext, ReactNode, useState} from "react";
import { Text } from 'react-native';

interface NumberContainerType {
  numberMap: Record<number, number>;
  resetNumberList: () => void;
  increaseGeneratedNumberTimes: (generatedNum: number) => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const NumberContainer = createContext<NumberContainerType>({
  numberMap: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0},
  resetNumberList: () => {},
  increaseGeneratedNumberTimes: () => {}
});

export const NumberContainerProvider = ({children}: ProviderProps) => {
 return (<Text></Text>)

}