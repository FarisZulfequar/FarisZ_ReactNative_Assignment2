import { Text, TouchableOpacity, View } from 'react-native';
import { generationPageStyles } from './GenerationPage.tsx';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationList } from './App.tsx';
import { useLayoutEffect } from 'react';

type navigationProp = NativeStackScreenProps<NavigationList, 'StatisticPage'>;

export function StatisticPage({navigation}: navigationProp) {
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
      <View style={generationPageStyles.bottomButtons}>
        <TouchableOpacity style={generationPageStyles.button}>
          <Text style={generationPageStyles.btnText}>Clear Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={generationPageStyles.button} onPress={() => navigation.goBack()}>
          <Text style={generationPageStyles.btnText}>Back Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}