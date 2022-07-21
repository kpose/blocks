import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from 'react-native';
import React from 'react';

export interface HystaTokenInterface {
  name: string;
  symbol: string;
  amount: string;
  signer: string;
}

const Hysta = ({name, symbol, amount, signer}: HystaTokenInterface) => {
  const {width} = useWindowDimensions();
  return (
    <Pressable>
      <View style={[styles.container, {width: width / 3}]}>
        <View style={styles.coinContents}>
          <Text style={styles.symbol}>{symbol}</Text>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.bottom}>
            <Image
              style={styles.logo}
              source={require('../../images/20.jpeg')}
            />
            <View>
              <Text style={styles.price}>{amount}</Text>
              <Text style={styles.usdprice}>$40,569</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Hysta;

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: '#a162b3',
    marginTop: 10,
    marginRight: 5,
    borderRadius: 20,
  },
  coinContents: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  symbol: {
    fontWeight: 'bold',
  },
  name: {
    fontSize: 12,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  usdprice: {
    fontSize: 10,
  },
  logo: {
    height: 20,
    width: 20,
    borderRadius: 50,
    marginRight: 7,
  },
  bottom: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
