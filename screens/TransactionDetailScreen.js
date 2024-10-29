import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { TransactionsContext } from '../context/TransactionsContext';

export default function TransactionDetailScreen({ route, navigation }) {
  const { transaction } = route.params;
  const { transactions, setTransactions } = useContext(TransactionsContext);

  const deleteTransaction = () => {
    Alert.alert(
      'Delete Transaction',
      'Are you sure you want to delete this transaction?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setTransactions(transactions.filter((t) => t.id !== transaction.id));
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{transaction.name}</Text>
      <Text style={styles.amount}>${transaction.amount}</Text>
      <Text style={styles.date}>Date: {transaction.date}</Text>

      <Button title="Delete Transaction" onPress={deleteTransaction} color="#e74c3c" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  amount: {
    fontSize: 28,
    color: '#2ecc71', 
    marginBottom: 20,
  },
  date: {
    fontSize: 16,
    color: '#888',
  },
});
