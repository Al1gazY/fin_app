// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import { TransactionsProvider } from './context/TransactionsContext'; 

export default function App() {
  return (
    <TransactionsProvider> 
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </TransactionsProvider>
  );
}
