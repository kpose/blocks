import React from 'react';
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootNavigator from './navigation/RootNavigator';

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
