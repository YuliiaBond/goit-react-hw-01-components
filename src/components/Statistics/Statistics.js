import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import style from './Statistics.module.css';
const Statistics = ({ title, stats }) => (
  <section className={style.statistics}>
    {title && <h2 className={style.title}>{title}</h2>}

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
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
