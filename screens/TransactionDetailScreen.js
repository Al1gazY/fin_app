import React from 'react';
import { View, Text } from 'react-native';

export default function TransactionDetailScreen({ route }) {
  const { transaction } = route.params;
  
  return (
    <View>
      <Text>Name: {transaction.name}</Text>
      <Text>Amount: {transaction.amount}</Text>
      <Text>Date: {transaction.date}</Text>
    </View>
  );
}
