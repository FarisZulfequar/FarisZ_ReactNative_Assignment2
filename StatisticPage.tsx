import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { generationPageStyles } from './GenerationPage.tsx';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationList } from './App.tsx';
import { useContext, useLayoutEffect } from 'react';
import { NumberContainer } from './NumberContainer.tsx';

type navigationProp = NativeStackScreenProps<NavigationList, 'StatisticPage'>;

export function StatisticPage({navigation}: navigationProp) {
  const { numberMap, resetNumberList } = useContext(NumberContainer);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={generationPageStyles.leftArrowBtn}>←</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (

    <View style={generationPageStyles.container}>
      <View style={[ generationPageStyles.container2, generationPageStyles.bottomButtons]}>
      <FlatList
        data={Object.keys(numberMap ?? {})}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
            <View style={[generationPageStyles.container2, generationPageStyles.bottomButtons]}>
              <Text style={generationPageStyles.btnText}>Number {item}:</Text>
              <Text style={generationPageStyles.btnText}>{numberMap[Number(item)]} times</Text>
            </View>
        )}
      />
      </View>
      <View style={generationPageStyles.bottomButtons}>
        <TouchableOpacity style={generationPageStyles.button} onPress={resetNumberList}>
          <Text style={generationPageStyles.btnText}>Clear Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={generationPageStyles.button} onPress={() => navigation.goBack()}>
          <Text style={generationPageStyles.btnText}>Back Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}