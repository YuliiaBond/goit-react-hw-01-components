import React from 'react';
import PropTypes from 'prop-types';

const StatisticItem = ({ label, percentage }) => (
  <div>
    <span class="label">{label}</span>
    <span class="percentage">{percentage}%</span>
  </div>
);

StatisticItem.prototype = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
