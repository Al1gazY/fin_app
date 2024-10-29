import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionItem({ transaction }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{transaction.name}</Text>
      <Text style={styles.amount}>${transaction.amount}</Text>
      <Text style={styles.date}>{transaction.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eaeaea',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  amount: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2ecc71',
  },
  date: {
    fontSize: 14,
    color: '#aaa',
  },
});
