import React, { useContext } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TransactionsContext } from '../context/TransactionsContext';
import TransactionItem from '../components/TransactionItem';

export default function TransactionsListScreen({ navigation }) {
  const { transactions } = useContext(TransactionsContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
            style={styles.card} 
          >
            <TransactionItem transaction={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',  
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});
