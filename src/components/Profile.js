import React from 'react';
import PropTypes from 'prop-types';
const Profile = ({avatar, name, tag, location, stats}) => (
    <div class="profile">
        <div class="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
                class="avatar"
                width="200"
    />
            <p class="name">{name}</p>
            <p class="tag">@{tag}</p>
            <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers </span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class="label">Views </span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span class="label">Likes </span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
    </div>
);

Profile.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.number.isRequired,
}

export default Profile;