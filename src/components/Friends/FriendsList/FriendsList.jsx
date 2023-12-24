import { FriendListItem } from '../FriendsListItem/FriendsListItem';
import { FriendBox } from './FriendsList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendBox>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendBox>
  );
};
