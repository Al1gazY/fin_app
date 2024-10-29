import React from 'react';
import { View, Text } from 'react-native';

const totalExpenses = 1250;

export default function SummaryScreen() {
  return (
    <View>
      <Text>Total Expenses: ${totalExpenses}</Text>
    </View>
  );
}
