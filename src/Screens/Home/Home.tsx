import {StyleSheet, View, Pressable, Alert} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Text} from 'react-native';
import useContract from '../../hooks/useContract.hook';
import {useWalletConnect} from '@walletconnect/react-native-dapp';
import {HystaCoinABI} from '../../contracts/blockcontracts';
import {HystaNonFungCoinABI} from '../../contracts/blockcontracts';
import Hysta from './Hysta';
import HystaNft from './HystaNft';
import {ethers} from 'ethers';
import {HystaTokenInterface} from './Hysta';
import {HystaNFTTokenInterface} from './HystaNft';
import {
  INFURA_PROJECT_ID,
  HYSTER_COIN_ADDRESS,
  HYSTER_NON_FUNG_ADDRESS,
  CHECK,
} from '@env';
console.log(INFURA_PROJECT_ID);
console.log(HYSTER_COIN_ADDRESS, 'KKK');

const Home = () => {
  const connector = useWalletConnect();
  const [hysta, setHysta] = useState<HystaTokenInterface>();
  const [hystaNft, setHystaNft] = useState<HystaNFTTokenInterface>();

  // get instance of hysta contract
  const [contract, signer] = useContract({
    infuraId: INFURA_PROJECT_ID,
    contractAbi: HystaCoinABI,
    contractAddress: HYSTER_COIN_ADDRESS,
  });
  // get instance of hysta nft
  const [nftcontract, nftsigner] = useContract({
    infuraId: INFURA_PROJECT_ID,
    contractAbi: HystaNonFungCoinABI,
    contractAddress: HYSTER_NON_FUNG_ADDRESS,
  });

  const onConnectPress = useCallback(() => {
    if (connector.connected) {
      Alert.alert(
        'Attention',
        'Are you sure you want to disconnect your account?',
        [
          {
            text: 'No',
            onPress: () => {},
            style: 'cancel',
          },
          {text: 'Yes', onPress: () => connector.killSession()},
        ],
      );
      return;
    }
    connector.connect();
  }, [connector]);

  const getHystaCoinInfo = useCallback(async () => {
    if (!connector || !connector.connected) {
      return;
    }
    try {
      const name = await contract.name();
      const signerAddress = await signer.getAddress();
      const balance = await contract.balanceOf(connector.accounts[0]);
      const symbol = await contract.symbol();
      const amountInBN = balance.toString();
      const amount = ethers.utils.formatEther(amountInBN);
      /* update state */
      setHysta({
        name,
        amount,
        symbol,
        signer: signerAddress,
      });
    } catch (err) {
      console.log('Error: ', err);
    }
  }, [connector, contract, signer]);

  const getHystaNFTCoinInfo = useCallback(async () => {
    if (!connector || !connector.connected) {
      return;
    }
    try {
      const name = await nftcontract.name();
      const signerAddress = await nftsigner.getAddress();
      const balance = await nftcontract.balanceOf(connector.accounts[0]);
      const symbol = await nftcontract.symbol();
      const amountInBN = balance.toString();
      const amount = ethers.utils.formatEther(amountInBN);
      /* update state */
      setHystaNft({
        name,
        amount,
        symbol,
        signer: signerAddress,
      });
    } catch (err) {
      console.log('Error: ', err);
    }
  }, [connector, nftcontract, nftsigner]);

  useEffect(() => {
    if (!connector || !connector.connected) {
      return;
    }
    getHystaCoinInfo();
    getHystaNFTCoinInfo();
  }, [connector, getHystaCoinInfo, getHystaNFTCoinInfo]);

  return (
    <View style={styles.container}>
      {!connector.connected ? (
        <View style={styles.buttonContainer}>
          <Text style={styles.connectHead}>
            You need to connect your account with metamask
          </Text>
          <Pressable style={styles.connectButton} onPress={onConnectPress}>
            <Text style={styles.connect}>Connect Account</Text>
          </Pressable>
        </View>
      ) : null}

      {/* render wallet */}
      <View style={styles.walletBody}>
        <Text style={styles.header}>TOKEN WALLET</Text>
        <Text style={styles.tokenTypes}>ERC20Tokens and ERC721Tokens</Text>
      </View>

      {/* render tokens */}
      <View style={styles.tokenContainer}>
        {hysta && (
          <Hysta
            name={hysta.name}
            symbol={hysta.symbol}
            amount={hysta.amount}
            signer={hysta.signer}
          />
        )}
        {hystaNft && (
          <HystaNft
            name={hystaNft.name}
            symbol={hystaNft.symbol}
            amount={hystaNft.amount}
            signer={hystaNft.signer}
          />
        )}
      </View>

      <Pressable style={styles.connectButton} onPress={onConnectPress}>
        <Text style={styles.connect}>Disconnect Account</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tokenContainer: {
    flexDirection: 'row',
  },
  connect: {
    color: '#fff',
  },
  connectHead: {
    fontSize: 12,
  },
  connectButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#1b9423',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  walletBody: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  tokenTypes: {
    fontSize: 10,
  },
  header: {
    fontWeight: 'bold',
  },
});
