import {StyleSheet} from 'react-native';
import React from 'react';
import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootNavigator from './navigation/RootNavigator';

const web3 = new Web3('http://localhost:7545');
const newWallet = web3.eth.accounts.wallet.create(1);
const newAccount = newWallet[0];
console.log(newAccount);

const App = () => {
  return (
    <WalletConnectProvider
      redirectUrl={'blocks://'}
      storageOptions={{
        asyncStorage: AsyncStorage,
      }}>
      <RootNavigator />
    </WalletConnectProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
