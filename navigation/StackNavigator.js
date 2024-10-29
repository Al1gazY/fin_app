import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsListScreen from '../screens/TransactionsListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList" component={TransactionsListScreen} options={{ title: 'Transactions' }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} options={{ title: 'Transaction Detail' }} />
    </Stack.Navigator>
  );
}
