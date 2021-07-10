import React from 'react';
import PropTypes from 'prop-types';

const Transation = ({ type, amount, currency }) => (
  <div>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </div>
);

Transation.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transation;
