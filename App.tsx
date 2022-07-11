import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Web3 from 'web3';

const web3 = new Web3('http://localhost:7545');
const newWallet = web3.eth.accounts.wallet.create(1);
const newAccount = newWallet[0];
console.log(newAccount);

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
