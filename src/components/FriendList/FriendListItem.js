import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div>
    <span class="status">{isOnline}</span>
    <img class="avatar" src={avatar} alt={name} width="48" />
    <p class="name">{name}</p>
  </div>
);

FriendListItem.prototype = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
