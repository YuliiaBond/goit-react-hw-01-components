import React from 'react';
import PropTypes from 'prop-types';
import Transation from './Transation';

const TransactionHistory = ({ items }) => (
  <table class="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        
        <tr key={id}>
        <Transation
          type={type}
          amount={amount}
          currency={currency}
          />
          </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.prototype = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default TransactionHistory;