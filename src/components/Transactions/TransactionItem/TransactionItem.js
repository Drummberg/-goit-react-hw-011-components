import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionItem.module.css';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tbody className={styles.tbody}>
      <tr className={styles.transaction_item}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
