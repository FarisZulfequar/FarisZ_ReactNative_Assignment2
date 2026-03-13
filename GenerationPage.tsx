import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationList } from './App.tsx';


type navigationProp = NativeStackScreenProps<NavigationList, 'GenerationPage'>;

export function GenerationPage({navigation} : navigationProp) {
  const [number, setNumber] = useState(0);
  const [currentIteration, setCurrentIteration] = useState(0);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 9) + 1;
    setNumber(randomNum);

    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 9) + 1;
      setNumber(randomNum);

      setCurrentIteration(prevIteration => {
        if (prevIteration < 6) {
          // keep iterating
          generateRandomNumber();
          return prevIteration + 1;
        } else {
          // final iteration
          return 0;
        }
      });

    }, 80)
  }

  return (
    <View style={generationPageStyles.container}>
      <View style={generationPageStyles.container2}>
        <Text style={generationPageStyles.textCenter}>{number === 0 ? '...' : number}</Text>
      </View>
      <View style={generationPageStyles.bottomButtons}>
        <TouchableOpacity style={generationPageStyles.button} onPress={() => generateRandomNumber()}>
          <Text style={generationPageStyles.btnText}>Generate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={generationPageStyles.button} onPress={() => navigation.navigate('StatisticPage')}>
          <Text style={generationPageStyles.btnText}>View Statistics</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export const generationPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#b08968',
  },

  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textCenter: {
    fontSize: 70,
    color: "white",
    fontWeight: "bold",
    marginTop : 100
  },

  bottomButtons: {
    flexDirection: 'row',
    gap : 10,
    paddingBottom : 25,
    paddingHorizontal :  25
  },

  button: {
    backgroundColor: '#7f5539',
    padding: 10,
    borderRadius: 5,
    width: "50%",
    height: "100%",
    alignItems: 'center',
  },

  btnText: {
    color: 'white',
    fontSize: 18,
  },

  leftArrowBtn : {
    color: 'white',
    fontSize: 25,
    fontFamily: 'System',
    marginRight : 10
  }
});