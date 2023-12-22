import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
  max-width: 100%;
  width: 360px;
  background-color: #9da5a5;
  border-radius: 5px;
  margin-top: 25px;
`;

export const Description = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(170, 196, 199);
  padding: 10px;
  border-radius: 5px;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: white;
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
`;

export const Info = styled.p`
  color: '#9e202';
  font-family: 'Roboto';
  font-size: 12px;
`;

export const Name = styled.p`
  font-weight: 500;
`;

export const Tag = styled.p`
  color: '#2b3162';
`;

export const Location = styled.p`
  color: '#1a236a';
 font-weight: 500;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background-color: rgb(95, 123, 126);
  padding: 10px;
 `;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  color: '#1a236a';
  font-size: 16px;
`;

export const Label = styled(StatsInfo)`
  font-weight: 400;
  display: block;
  text-align: center;
`;

export const Quantity = styled(StatsInfo)`
  color: '#1a236a';
  text-shadow: 1px 1px 1px #fff;
  font-weight: 700;
  display: block;
  text-align: center;
`;
