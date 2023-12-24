import {
  Avatar,
  FriendItem,
  Name,
  Status,
  StatusGreen,
  StatusRed,
} from './FriendsListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status>{isOnline ? <StatusRed /> : <StatusGreen />}</Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};
