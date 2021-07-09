import React from "react";
import PropTypes from "prop-types";

const Statistic = ({ label, percentage }) => (
    <div>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}%</span>
    </div>
);

Statistic.prototype = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default Statistic;