import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
const Statistics = ({ stats }) => (
  <section class="statistics">
    <h2 class="title">Upload stats</h2>

    <ul class="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li class="item" key={id}>
          <StatisticItem label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  </section>
);

Statistics.prototype = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
