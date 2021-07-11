import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendListItem = props => {
  // console.log(props);
  const StatucClass = [
    style.status,
    props.isOnline ? style.online : style.offline,
  ];
  return (
    <>
      <span className={StatucClass.join(' ')}></span>
      <img
        className={style.avatar}
        src={props.avatar}
        alt={props.name}
        width="48"
      />
      <p className={style.name}>{props.name}</p>
    </>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
