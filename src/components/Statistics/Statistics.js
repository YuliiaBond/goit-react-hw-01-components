import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import style from './Statistics.module.css';
const Statistics = ({ stats }) => (
  <section className={style.statistics}>
    <h2 className={style.title}>Upload stats</h2>

    <ul className={style.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li className={style.item} key={id}>
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
