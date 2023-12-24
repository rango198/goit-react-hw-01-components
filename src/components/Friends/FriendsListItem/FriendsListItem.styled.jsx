import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;

  padding: 10px 30px 10px 10px;
  border-radius: 10px;

  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  cursor: pointer;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: 0.25s;

  background-color: #fff;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
  }
`;
export const Avatar = styled.img`
  width: 46px;
`;
export const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
