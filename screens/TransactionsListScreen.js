import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import TransactionItem from '../components/TransactionItem';

const transactions = [
  { id: '1', name: 'Grocery', amount: '$50', date: '2024-10-28' },
  { id: '2', name: 'Rent', amount: '$1200', date: '2024-10-01' },
];

export default function TransactionsListScreen({ navigation }) {
  return (
    <View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
            <TransactionItem transaction={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
