import React from 'react';
import Home from '../Screens/Home/Home';
import Transact from '../Screens/Transact';
import {createStackNavigator} from '@react-navigation/stack';

export type AppStackParamList = {
  Home: undefined;
  Transact: {symbol: string};
};

const Stack = createStackNavigator<AppStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Transact" component={Transact} />
    </Stack.Navigator>
  );
}
