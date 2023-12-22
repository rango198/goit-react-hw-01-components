import React from "react"
 import { Avatar, Description, Label, Location, Name, ProfileCard, Quantity, StatsItem, StatsList, Tag } from './Profile.styled';






export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} className="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};
