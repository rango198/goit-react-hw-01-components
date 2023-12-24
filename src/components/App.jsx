import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList } from './Friends/FriendsList/FriendsList.jsx';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from '../components/Friends/friends.json';
import transactions from './Transaction/transactions.json';
import { TransactionHistory } from './Transaction/TransactionHistory.jsx';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
