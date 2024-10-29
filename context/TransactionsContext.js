import React, { createContext, useState } from 'react';

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
  { id: '1', name: 'Laptop', amount: 1050, date: '2024-10-29'},
  { id: '2', name: 'Rent', amount: 1400, date: '2024-10-20'},
  { id: '3', name: 'Gas', amount: 70, date: '2024-01-20'},
]);

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
