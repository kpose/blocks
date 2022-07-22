import type {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '../navigation/AppStack';

export type HomeScreenProps = StackScreenProps<AppStackParamList, 'Home'>;
export type TransactScreenProps = StackScreenProps<
  AppStackParamList,
  'Transact'
>;
