import React, { useEffect, useState } from 'react';
import API from '../../services/api';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await API.get('/transactions');
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error(error.response?.data?.message || 'Error fetching transactions');
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.amount} - {transaction.category} - {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
