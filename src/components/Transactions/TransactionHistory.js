import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem/TransactionItem';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => {
        return <TransactionItem key={item.id} {...item} />;
      })}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
