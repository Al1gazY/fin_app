import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TransactionsContext } from '../context/TransactionsContext';

export default function SummaryScreen() {
  const { transactions } = useContext(TransactionsContext);

  const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total Expenses</Text>
      <Text style={styles.total}>${totalExpenses}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
  },
  label: {
    fontSize: 20,
    color: '#555',
    marginBottom: 10,
  },
  total: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3498db',  
  },
});
