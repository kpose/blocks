import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useCallback, useState} from 'react';
import {TransactScreenProps} from './interfaces';
import useContract from '../hooks/useContract.hook';
import {HystaCoinABI} from '../contracts/blockcontracts';
import {HystaNonFungCoinABI} from '../contracts/blockcontracts';
import {ethers} from 'ethers';
import {
  INFURA_PROJECT_ID,
  HYSTER_COIN_ADDRESS,
  HYSTER_NON_FUNG_ADDRESS,
} from '@env';

const Transact = ({
  navigation,
  route: {
    params: {symbol},
  },
}: TransactScreenProps) => {
  const [amount, onChangeAmount] = useState('');
  const [address, onChangeAddress] = useState('');

  const [contract, signer, hycProvider] = useContract({
    infuraId: INFURA_PROJECT_ID,
    contractAbi: HystaCoinABI,
    contractAddress: HYSTER_COIN_ADDRESS,
  });

  const [nftcontract, nftsigner, hyncProvider] = useContract({
    infuraId: INFURA_PROJECT_ID,
    contractAbi: HystaNonFungCoinABI,
    contractAddress: HYSTER_NON_FUNG_ADDRESS,
  });

  const onTransferPress = useCallback(async () => {
    const to_address = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC';
    const numberOfTokens = ethers.utils.parseUnits(amount, 18);
    const gasPrice = await hycProvider.getGasPrice();

    const gasLimit = await contract.estimateGas.transfer(
      to_address,
      numberOfTokens,
    );

    try {
      await contract
        .transfer(to_address, numberOfTokens, {
          gasLimit: gasLimit,
          gasPrice: gasPrice,
        })
        .then((res: any) => {
          console.log(res);
        });
      console.log(`${amount} Coins successfully sent to ${to_address}`);
    } catch (error) {
      console.log(error);
    }
  }, [amount, contract, hycProvider]);

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.title}> Send {symbol}</Text>
        <Text style={styles.desc}>
          {' '}
          Only send {symbol} to an Ethereum address
        </Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeAddress}
        value={address}
        placeholder={'Recipient address..'}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeAmount}
        value={amount}
        placeholder={'Amount: '}
        keyboardType="numeric"
      />

      <Pressable style={styles.connectButton} onPress={onTransferPress}>
        <Text style={styles.connect}>Transfer</Text>
      </Pressable>
    </View>
  );
};

export default Transact;

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  connect: {
    color: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  detailContainer: {
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    lineHeight: 21,
  },
  desc: {
    fontSize: 12,
  },
  connectButton: {
    marginTop: 10,
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b9423',
    borderRadius: 5,
    alignSelf: 'center',
  },
});
