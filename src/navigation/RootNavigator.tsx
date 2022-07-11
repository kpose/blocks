import React from 'react';
import {StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native';
import AppStack from './AppStack';
import {NavigationContainer} from '@react-navigation/native';

const linking = {
  prefixes: ['blocks://'],
};

export default function RootNavigator() {
  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <AppStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
