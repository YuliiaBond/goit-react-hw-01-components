import React from 'react';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';


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

            <Statistics
                stats={statisticalData}
            />

            <FriendList
                friends={friends}
            />

            <TransactionHistory
                items={transactions}
            />
        </div>
    )
};

export default App;