import React from 'react';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import user from './user.json';

const App = () => {
    return (
        <div>
            <h1>Homework 1</h1>

            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />

            <Statistics />
        </div>
    )
};

export default App;