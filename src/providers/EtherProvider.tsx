// import React, {createContext, useEffect, useState} from 'react';
// import {useContext} from 'react';
// import {FC} from 'react';
// import WalletConnectProvider from '@walletconnect/web3-provider';
// import {useWalletConnect} from '@walletconnect/react-native-dapp';
// import {providers} from 'ethers';

// const INFURAID = '05418408b9474fb387f8e3b193cd7cc3';

// interface IEtherjsContext {
//   ether: any | null;
// }
// type IEtherProviderProps = {
//   children: React.ReactNode; // 👈️ type children
// };

// const defaultState = {
//   ether: null,
// };

// const EtherjsContext = createContext<IEtherjsContext>(defaultState);

// export const EtherProvider = ({children}: IEtherProviderProps) => {
//   const [ether, setEther] = useState();
//   const connector = useWalletConnect();

//   useEffect(() => {
//     const provider = new WalletConnectProvider({
//       infuraId: INFURAID,
//       connector: connector,
//       qrcode: false,
//     });

//     if (!provider) {
//       console.log('no connector');
//       return;
//     }
//     const setProvider = async () => {
//       //   await provider.enable();
//       const etherProvider = new providers.Web3Provider(provider);
//       console.log(etherProvider);
//       setEther(etherProvider);
//     };
//     setProvider();
//   }, [connector]);

//   return (
//     <EtherjsContext.Provider value={{ether}}>
//       {children}
//     </EtherjsContext.Provider>
//   );
// };

// export const useEtherjsContext = () => useContext(EtherjsContext);
