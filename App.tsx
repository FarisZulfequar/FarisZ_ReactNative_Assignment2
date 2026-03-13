// Name: Faris Zulfequar
// ID: 991787502
// Github Repo: https://github.com/FarisZulfequar/FarisZ_Flutter_Assignment2


import { GenerationPage } from './GenerationPage.tsx';
import { StatisticPage } from './StatisticPage.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type NavigationList = {
  GenerationPage: undefined
  StatisticPage: undefined
}

const Stack = createNativeStackNavigator<NavigationList>();

export function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GenerationPage">
        <Stack.Screen
          name="GenerationPage"
          component={GenerationPage}
          options={{
            title: "Random Number Generator",
            headerStyle: {
              backgroundColor: "#7f5539"
            },
            headerTintColor: "white"
          }}
        />
        <Stack.Screen
          name="StatisticPage"
          component={StatisticPage}
          options={({}) => ({
            title: "Statistics",
            headerStyle: {
              backgroundColor: "#7f5539"
            },
            headerTintColor: "white"
          })}
        />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
