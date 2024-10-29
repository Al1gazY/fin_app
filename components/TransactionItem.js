import React from 'react';
import { View, Text } from 'react-native';

export default function TransactionItem({ transaction }) {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text>{transaction.name}</Text>
      <Text>{transaction.amount}</Text>
      <Text>{transaction.date}</Text>
    </View>
  );
}
