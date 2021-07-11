import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const StatisticItem = ({ label, percentage }) => (
  <>
    <span className={style.label}>{label}</span>
    <span className={style.percentage}>{percentage}%</span>
  </>
);

StatisticItem.prototype = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
